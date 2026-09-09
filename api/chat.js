export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid messages format', { status: 400 });
    }

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    if (!GROQ_API_KEY) {
      return new Response(JSON.stringify({ error: 'GROQ_API_KEY is not configured in Vercel Environment Variables.' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const systemPrompt = {
      role: 'system',
      content: 'You are an excellent Indian culture and heritage bot who has all the knowledge about Indian culture and heritage only. You will not answer any questions outside of Indian heritage, philosophy, history, geography, arts, and traditions. Format responses using beautiful Markdown.'
    };

    const apiMessages = [systemPrompt, ...messages];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: apiMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: `Groq API Error: ${errorText}` }), { 
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create a TransformStream to parse Groq's SSE and yield only the raw text tokens safely
    let buffer = '';
    const transformStream = new TransformStream({
      transform(chunk, controller) {
        buffer += new TextDecoder().decode(chunk, { stream: true });
        
        let boundary = buffer.indexOf('\n');
        while (boundary !== -1) {
          const line = buffer.slice(0, boundary).trim();
          buffer = buffer.slice(boundary + 1);
          
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              const data = JSON.parse(line.substring(6));
              if (data.choices && data.choices[0].delta && data.choices[0].delta.content) {
                controller.enqueue(new TextEncoder().encode(data.choices[0].delta.content));
              }
            } catch (e) {
              // ignore malformed JSON lines
            }
          }
          boundary = buffer.indexOf('\n');
        }
      }
    });

    return new Response(response.body.pipeThrough(transformStream), {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
