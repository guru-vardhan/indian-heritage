/**
 * Indian Heritage & Culture - Comprehensive States & Heritage Sites Database
 * Pan-India Coverage with Multi-Image Galleries & 360° Virtual Tour Panoramas
 */

const STATES_DATA = [
  { id: "AndhraPradesh", name: "Andhra Pradesh", capital: "Amaravati", region: "South India", icon: "🌄", tourismUrl: "https://tourism.ap.gov.in", touristHelpline: "1800-425-4545", emergencyHelpline: "112 / 108" },
  { id: "Telangana", name: "Telangana", capital: "Hyderabad", region: "South India", icon: "🏰", tourismUrl: "https://tourism.telangana.gov.in", touristHelpline: "1800-425-46464", emergencyHelpline: "112 / 108" },
  { id: "TamilNadu", name: "Tamil Nadu", capital: "Chennai", region: "South India", icon: "🛕", tourismUrl: "https://www.tamilnadutourism.tn.gov.in", touristHelpline: "1800-4253-1111", emergencyHelpline: "112 / 108" },
  { id: "Karnataka", name: "Karnataka", capital: "Bengaluru", region: "South India", icon: "🐘", tourismUrl: "https://karnatakatourism.org", touristHelpline: "080-22352828", emergencyHelpline: "112 / 108" },
  { id: "Maharashtra", name: "Maharashtra", capital: "Mumbai", region: "West India", icon: "🗿", tourismUrl: "https://www.maharashtratourism.gov.in", touristHelpline: "1800-229-930", emergencyHelpline: "112 / 108" },
  { id: "Rajasthan", name: "Rajasthan", capital: "Jaipur", region: "North India", icon: "👑", tourismUrl: "https://tourism.rajasthan.gov.in", touristHelpline: "0141-2822863", emergencyHelpline: "112 / 108" },
  { id: "UttarPradesh", name: "Uttar Pradesh", capital: "Lucknow", region: "North India", icon: "🕌", tourismUrl: "https://uptourism.gov.in", touristHelpline: "1800-180-5013", emergencyHelpline: "112 / 108" },
  { id: "MadhyaPradesh", name: "Madhya Pradesh", capital: "Bhopal", region: "Central India", icon: "🏛️", tourismUrl: "https://www.mptourism.com", touristHelpline: "1800-233-7777", emergencyHelpline: "112 / 108" },
  { id: "Gujarat", name: "Gujarat", capital: "Gandhinagar", region: "West India", icon: "🦁", tourismUrl: "https://www.gujarattourism.com", touristHelpline: "1800-200-5080", emergencyHelpline: "112 / 108" },
  { id: "Odisha", name: "Odisha", capital: "Bhubaneswar", region: "East India", icon: "☀️", tourismUrl: "https://odishatourism.gov.in", touristHelpline: "1800-208-1414", emergencyHelpline: "112 / 108" },
  { id: "Kerala", name: "Kerala", capital: "Thiruvananthapuram", region: "South India", icon: "🌴", tourismUrl: "https://www.keralatourism.org", touristHelpline: "1800-425-4747", emergencyHelpline: "112 / 108" },
  { id: "WestBengal", name: "West Bengal", capital: "Kolkata", region: "East India", icon: "🐅", tourismUrl: "https://wbtourism.gov.in", touristHelpline: "1800-212-1655", emergencyHelpline: "112 / 108" },
  { id: "Bihar", name: "Bihar", capital: "Patna", region: "East India", icon: "☸️", tourismUrl: "https://tourism.bihar.gov.in", touristHelpline: "1800-345-6112", emergencyHelpline: "112 / 108" },
  { id: "Punjab", name: "Punjab", capital: "Chandigarh", region: "North India", icon: "✨", tourismUrl: "https://punjabtourism.punjab.gov.in", touristHelpline: "1800-180-0008", emergencyHelpline: "112 / 108" },
  { id: "Delhi", name: "Delhi", capital: "New Delhi", region: "North India", icon: "🇮🇳", tourismUrl: "https://delhitourism.gov.in", touristHelpline: "1800-11-1363", emergencyHelpline: "112 / 100" },
  { id: "Goa", name: "Goa", capital: "Panaji", region: "West India", icon: "⛵", tourismUrl: "https://goatourism.gov.in", touristHelpline: "0832-2438750", emergencyHelpline: "112 / 108" },
  { id: "Assam", name: "Assam", capital: "Dispur", region: "Northeast India", icon: "🦏", tourismUrl: "https://assamtourism.gov.in", touristHelpline: "1800-345-3850", emergencyHelpline: "112 / 108" },
  { id: "JammuAndKashmir", name: "Jammu and Kashmir", capital: "Srinagar / Jammu", region: "North India", icon: "🏔️", tourismUrl: "https://jktourism.jk.gov.in", touristHelpline: "1800-103-1060", emergencyHelpline: "112 / 108" },
  { id: "Ladakh", name: "Ladakh", capital: "Leh", region: "North India", icon: "🗻", tourismUrl: "https://ladakhtourism.org", touristHelpline: "01982-252297", emergencyHelpline: "112 / 108" },
  { id: "HimachalPradesh", name: "Himachal Pradesh", capital: "Shimla", region: "North India", icon: "🌲", tourismUrl: "https://himachaltourism.gov.in", touristHelpline: "0177-2658302", emergencyHelpline: "112 / 108" },
  { id: "Uttarakhand", name: "Uttarakhand", capital: "Dehradun", region: "North India", icon: "🕉️", tourismUrl: "https://uttarakhandtourism.gov.in", touristHelpline: "1800-180-4145", emergencyHelpline: "112 / 108" },
  { id: "Chhattisgarh", name: "Chhattisgarh", capital: "Raipur", region: "Central India", icon: "🌾", tourismUrl: "https://chhattisgarhtourism.cg.gov.in", touristHelpline: "1800-102-6415", emergencyHelpline: "112 / 108" },
  { id: "Jharkhand", name: "Jharkhand", capital: "Ranchi", region: "East India", icon: "⛏️", tourismUrl: "https://tourism.jharkhand.gov.in", touristHelpline: "1800-345-6571", emergencyHelpline: "112 / 108" },
  { id: "Haryana", name: "Haryana", capital: "Chandigarh", region: "North India", icon: "🏹", tourismUrl: "https://haryanatourism.gov.in", touristHelpline: "1800-180-2111", emergencyHelpline: "112 / 108" },
  { id: "Sikkim", name: "Sikkim", capital: "Gangtok", region: "Northeast India", icon: "🌸", tourismUrl: "https://sikkimtourism.gov.in", touristHelpline: "03592-209090", emergencyHelpline: "112 / 108" },
  { id: "ArunachalPradesh", name: "Arunachal Pradesh", capital: "Itanagar", region: "Northeast India", icon: "🌅", tourismUrl: "https://arunachaltourism.com", touristHelpline: "0360-2214745", emergencyHelpline: "112 / 108" },
  { id: "Meghalaya", name: "Meghalaya", capital: "Shillong", region: "Northeast India", icon: "🌧️", tourismUrl: "https://www.meghalayatourism.in", touristHelpline: "1800-345-3755", emergencyHelpline: "112 / 108" },
  { id: "Nagaland", name: "Nagaland", capital: "Kohima", region: "Northeast India", icon: "🪶", tourismUrl: "https://tourism.nagaland.gov.in", touristHelpline: "0370-2270107", emergencyHelpline: "112 / 108" },
  { id: "Manipur", name: "Manipur", capital: "Imphal", region: "Northeast India", icon: "💎", tourismUrl: "https://manipurtourism.gov.in", touristHelpline: "0385-2450033", emergencyHelpline: "112 / 108" },
  { id: "Mizoram", name: "Mizoram", capital: "Aizawl", region: "Northeast India", icon: "🎋", tourismUrl: "https://tourism.mizoram.gov.in", touristHelpline: "0389-2333475", emergencyHelpline: "112 / 108" },
  { id: "Tripura", name: "Tripura", capital: "Agartala", region: "Northeast India", icon: "🔱", tourismUrl: "https://tripuratourism.gov.in", touristHelpline: "0381-2325924", emergencyHelpline: "112 / 108" },
  { id: "Puducherry", name: "Puducherry", capital: "Pondicherry", region: "South India", icon: "🌊", tourismUrl: "https://pondytourism.in", touristHelpline: "0413-2339497", emergencyHelpline: "112 / 108" },
  { id: "Chandigarh", name: "Chandigarh", capital: "Chandigarh", region: "North India", icon: "🏙️", tourismUrl: "https://chandigarhtourism.gov.in", touristHelpline: "0172-2740420", emergencyHelpline: "112 / 108" },
  { id: "AndamanAndNicobar", name: "Andaman and Nicobar Islands", capital: "Port Blair", region: "Islands", icon: "🏝️", tourismUrl: "https://www.andamantourism.gov.in", touristHelpline: "03192-232694", emergencyHelpline: "112 / 108" },
  { id: "DadraAndNagarHaveli", name: "Dadra and Nagar Haveli & Daman and Diu", capital: "Daman", region: "West India", icon: "🏰", tourismUrl: "https://ddd.gov.in/tourism", touristHelpline: "0260-2255104", emergencyHelpline: "112 / 108" },
  { id: "Lakshadweep", name: "Lakshadweep", capital: "Kavaratti", region: "Islands", icon: "🐚", tourismUrl: "https://lakshadweeptourism.nic.in", touristHelpline: "04896-262105", emergencyHelpline: "112 / 108" }
];

const HERITAGE_SITES = [
  // ================= ANDHRA PRADESH =================
  {
    id: "tirupati-temple",
    name: "Sri Venkateswara Swamy Temple, Tirupati",
    stateId: "AndhraPradesh",
    stateName: "Andhra Pradesh",
    district: "Tirupati / Chittoor",
    category: "Sacred Temple",
    isUnesco: false,
    rating: 4.9,
    builtIn: "300 CE onwards (Pallavas, Cholas & Vijayanagara Empire)",
    architecturalStyle: "Dravidian Architecture with Golden Vimana (Ananda Nilayam)",
    description: "Perched atop the sacred Seshachalam Hills across seven peaks (Sapthagiri), the Tirumala Venkateswara Temple is one of the most visited and venerated pilgrimage sites in the world. Revered as Kaliyuga Vaikuntham, the presiding deity Lord Venkateswara stands majestic in the sanctum adorned with gold, diamonds, and fragrant camphor.Tirumala is a sacred hill town nestled in the Seshachalam Hills of Tirupati district, Andhra Pradesh, renowned worldwide for the Sri Venkateswara Swamy Temple. Perched on Venkatadri—the seventh peak symbolizing the serpent Adishesha—the shrine is dedicated to Lord Venkateswara (an incarnation of Lord Vishnu), revered as Kaliyuga Prathyaksha Daivam. Showcasing Dravidian architecture with its gilded Ananda Nilayam vimana crowning the inner sanctum, Tirumala was patronized across centuries by the Pallava, Chola, and Vijayanagara empires. Administered by the Tirumala Tirupati Devasthanams (TTD), it ranks among the world's most visited and wealthiest pilgrimage destinations, drawing tens of millions of devotees every year for darshan, tonsure offerings, and the world-famous Tirupati laddu prasadam.",
    culturalSignificance: "Major spiritual center for Vaishnavite traditions with unbroken centuries-old temple rituals, sacred Laddu Prasadam (GI tagged), and massive philanthropic endeavors.",
    festival: {
      name: "Sri Venkateswara Swami Brahmotsavam & Vaikunta Ekadasi",
      period: "September  October & December  January",
      description: "A grand 9-day annual festival featuring celestial chariot processions (Garuda Vahanam, Rathotsavam) witnessed by millions of devotees."
    },
    bestTime: "September to February (Pleasant hill weather)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tirumala+Venkateswara+Temple+Andhra+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Venkateswara_Temple,_Tirumala",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/1280px-Tirumala_090615.jpg",
    images: [
      { url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWksOR8V3p43rAnc-s-H2eBbhHcJ5bONOGfMfvsmCGyvN8pOHO4Iqkrfq0fQs-03-QH6ey-rcqaWlWiywcPqqx9WZPrGYKOEramm27DI60sPMaX-gQWB7dz69hYcnaMng2JNX6tSt4ShXVs=s1360-w1360-h1020-rw" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwC4TksdJmxxAg0rV5Mldyze5L4_VMAqHX_-P7oBQYSeX0-fEQNEOYEvs&s=10" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYhnPhnWhdIzQA1JFT-FrLGCYqvkTUSz0Fz63JQUWnA&s=10" },
      { url: "https://www.trawell.in/admin/images/upload/741666954Tirumala_AkasaGanga_Main.jpg" }
    ],
    virtualTour: {
      panoramaUrl: "https://maps.app.goo.gl/YK6J6WmuSsPPWqub7",
      title: "360° Panorama - Tirumala Temple Courtyard",
      hotspots: [
        { x: 30, y: 40, title: "Golden Ananda Nilayam", desc: "Pure gold-plated Vimana tower directly over Lord Venkateswara's sanctum." },
        { x: 75, y: 55, title: "Dhvajastambha (Flagpole)", desc: "Gilded temple mast where holy garuda flag is hoisted during Brahmotsavams." },
        { x: 50, y: 70, title: "Seshachalam Hill Ridge", desc: "Sacred seven hills embodying the serpent Adisesha." }
      ]
    },
    tags: ["Pilgrimage", "Dravidian", "Sacred Hills", "Vedic Rituals", "South India", "Temple"]
  },
  {
    id: "lepakshi-temple",
    name: "Veerabhadra Temple & Hanging Pillar, Lepakshi",
    stateId: "AndhraPradesh",
    stateName: "Andhra Pradesh",
    district: "Sri Sathya Sai / Anantapur",
    category: "Ancient Monument & Temple",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1530 CE (Built by Virupanna Nayaka & Viranna under King Achyuta Deva Raya)",
    architecturalStyle: "Vijayanagara Style Rock Architecture with Frescoes",
    description: "Lepakshi is world-famous for its architectural marvel â€” the legendary 'Hanging Pillar' that defies gravity without touching the floor. The temple complex features the magnificent monolithic Nagalinga (hooded seven-headed serpent) and the world's largest monolithic granite Nandi statue carved out of a single boulder.Perched on the tortoise-shaped granite hillock known as Kurmasaila, the temple exemplifies Vijayanagara art and engineering. It is renowned for its gravity-defying hanging pillar that does not touch the ground, intricate stone-carved sculptures of deities and musicians, vibrant ceiling fresco murals, and the magnificent monolithic Nagalinga shielded by a seven-hooded serpent. Just a short distance from the main shrine stands the colossal monolithic Nandi, one of India's largest single-stone bull sculptures, sculpted with realistic proportions and fine ornamentation. Rich in mythology, folklore links the site to the Ramayana as the place where the noble bird Jatayu fell and was liberated by Lord Rama. ",
    culturalSignificance: "Associated with the Ramayana epic where the wounded bird Jatayu fell after battling Ravana ('Le Pakshi' translates to 'Rise, Bird' in Telugu). Houses some of the finest surviving Vijayanagara ceiling mural paintings.",
    festival: {
      name: "Maha Shivaratri & Lepakshi Cultural Utsav",
      period: "February and March",
      description: "Night-long devotional vigils, classical Kuchipudi dances in the Natya Mandapa, and Vedic fire rituals."
    },
    bestTime: "October to March (Pleasant dry winter)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lepakshi+Veerabhadra+Temple+Andhra+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Lepakshi",
    imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/lepakshi-anantapur-ap-1-attr-hero?qlt=82&ts=1726743954484",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J7_SKGrCAP9jhTPHdbQ_2dtmZ3FypA6xzUFjMeO_EkJAGUQfmTR1Mh8&s=10", caption: "Monolithic Seven-Headed Nagalinga & Shivalinga" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0iY6z8xtRZtWzD6HKTbsUs0jyxorNcLszQPVQpbkDATojrrhamuXxWQ&s=10", caption: "Natya Mandapa Intricately Carved Pillars" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKHPnRGJk0RW8rDUjAH65g_eUmr6fR7m8qATOZsb3_UyUYujIIbpAF66O&s=10", caption: "Colossal Monolithic Granite Nandi Bull" }
    ],
    virtualTour: {
      panoramaUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Natya_Mandap_%2C_Veerabhadra_Temple%2C_Lepakshi_10.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  
      title: "360° Panorama - Lepakshi Natya Mandapa",
      hotspots: [
        { x: 42, y: 38, title: "Gravity-Defying Hanging Pillar", desc: "Corner pillar that rests without touching the ground; cloth can pass underneath." },
        { x: 80, y: 60, title: "Monolithic Nagalinga", desc: "Massive 15-foot granite sculpture carved out of a single boulder in one afternoon." },
        { x: 20, y: 75, title: "Vijayanagara Ceiling Murals", desc: "Vegetable-dye fresco masterpieces depicting Virabhadra and Shiva's cosmic lore." }
      ]
    },
    tags: ["Vijayanagara", "Hanging Pillar", "Rock Architecture", "Monolithic Nandi", "Mural Art"]
  },
  {
    id: "amaravati-stupa",
    name: "Mahachaitya & Buddhist Heritage Site, Amaravati",
    stateId: "AndhraPradesh",
    stateName: "Andhra Pradesh",
    district: "Guntur / Palnadu",
    category: "Ancient Buddhist Stupa",
    isUnesco: false,
    rating: 4.7,
    builtIn: "3rd Century BCE & 2nd Century CE (Satavahana Dynasty)",
    architecturalStyle: "Amaravati School of Buddhist Art & Limestone Carvings",
    description: "Amaravati was the ancient seat of the Satavahana Empire and one of India's greatest Buddhist monastic metropolises. The Great Stupa (Mahachaitya) was decorated with world-renowned Palnad marble and limestone reliefs depicting Jataka tales, Ashoka's edicts, and the life of Buddha.",
    culturalSignificance: "Foundational cradle of Mahayana Buddhism where Acharya Nagarjuna taught Madhyamaka philosophy. The Kalachakra initiation was conducted here by His Holiness the Dalai Lama.",
    festival: {
      name: "Buddha Purnima & Amaravati Heritage Festival",
      period: "May",
      description: "International Buddhist monks gather for peaceful chanting, meditation circles, and lamp lighting ceremonies on the banks of River Krishna."
    },
    bestTime: "November to February",
    mapUrl: "https://content3.jdmagicbox.com/comp/guntur/k9/9999px863.x863.190814134250.e6k9/catalogue/dhyana-buddha-temple-amaravathi-guntur-buddhist-temples-mzpPLoiyw2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Amaravati_Stupa",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      {url:"https://s7ap1.scene7.com/is/image/incredibleindia/kalachakra-amravati-andhra-pradesh-city-ff?qlt=82&ts=1742152317335  ", caption: "Amaravati Dhyana Buddha 125-foot Statue" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_ek4eJ07j-Wda9PxP22HYD8CjP2v3jDGJjp83rvzPnCE0QtApl822Rs&s=10", caption: "Archaeological Excavations of Mahachaitya" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANG97OyZ0CiTxYMPQjAqly55czji235T8vEhL-mlU4ieohcE9Ms_w3_c&s=10",
      title: "360Â° Panorama - Amaravati Dhyana Buddha Enclave",
      hotspots: [
        { x: 50, y: 35, title: "125-ft Dhyana Buddha", desc: "Majestic seated Buddha in meditative posture overlooking the Krishna River." },
        { x: 25, y: 65, title: "Limestone Ayaka Pillars", desc: "Satavahana era sculptured panels representing the five stages of Buddha's life." }
      ]
    },
    tags: ["Buddhism", "Satavahana", "Ashokan Heritage", "Ancient Monastic", "Archaeology"]
  },

  // ================= TELANGANA =================
  {
    id: "ramappa-temple",
    name: "Kakatiya Rudreshwara (Ramappa) Temple",
    stateId: "Telangana",
    stateName: "Telangana",
    district: "Mulugu",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1213 CE (Built by General Recharla Rudra under Kakatiya King Ganapati Deva)",
    architecturalStyle: "Kakatiya Style Star-Shaped Sandstone with Floating Bricks",
    description: "The Ramappa Temple stands on a 6-foot high star-shaped platform, named after its master sculptor Ramappa. Famous for its anti-seismic sandbox technology, lightweight floating bricks used in the Shikhara, and lustrous black basalt bracket figures (Madanikas) that produce musical resonance when tapped.",
    culturalSignificance: "Epitome of medieval Deccan temple engineering that withstood multiple earthquakes. Dedicated to Rudreswara Shiva and praised by Italian traveler Marco Polo as the 'brightest star in the galaxy of medieval temples'.",
    festival: {
      name: "Maha Shivaratri & Ramappa National Dance Festival",
      period: "February â€“ March",
      description: "Classical Perini Sivatandavam and Kuchipudi recitals performed in the temple courtyard under moonlit skies."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ramappa+Temple+Mulugu+Telangana",
    wikiUrl: "https://en.wikipedia.org/wiki/Ramappa_Temple",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Ramappa_Temple_%28Human_Scale%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    images: [
      { url: "https://www.re-thinkingthefuture.com/wp-content/uploads/2022/01/A6149-Kakatiya-Rudreshwara-%E2%80%93-Master-Craftsmanship-Image-4.jpg?w=999", caption: "Kakatiya Star-Shaped Platform & Sanctum" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HdxjB2eKjp5rWWe0bzvxpOQGyEb9ZsHPaYjXrp8AIcULUXlZpDjTArk&s=10", caption: "Polished Black Basalt Madanika Bracket Figures" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnlwdcCbrl_Dgla3W9Z2JbFkRemfFegQeoyXCnB9vBnRmJqrVFXD-BIc&s=10",
      title: "360Â° Panorama - Ramappa Temple Sanctum",
      hotspots: [
        { x: 35, y: 45, title: "Floating Brick Shikhara", desc: "Spongy clay bricks with low density that float on water to reduce superstructure weight." },
        { x: 70, y: 55, title: "Madanika Bracket Carvings", desc: "Flawlessly polished black dolerite bracket figures displaying classical dance poses." }
      ]
    },
    tags: ["UNESCO", "Kakatiya", "Floating Bricks", "Sandbox Technology", "Perini Dance"]
  },
  {
    id: "golconda-fort",
    name: "Golconda Fort & Acoustic Citadel",
    stateId: "Telangana",
    stateName: "Telangana",
    district: "Hyderabad",
    category: "Medieval Fort & Citadel",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1143 CE â€“ 16th Century (Kakatiyas & Qutb Shahi Dynasty)",
    architecturalStyle: "Indo-Islamic Military & Acoustic Citadel",
    description: "Rising 400 feet above the Hyderabad plains, Golconda was the legendary capital of the Qutb Shahi Sultanate and the world's epicenter for diamond trade, where the Koh-i-Noor and Hope Diamonds were traded. Famous for its acoustic engineering â€” a hand clap at the entrance portico (Fateh Darwaza) is clearly audible at the Bala Hissar pavilion at the highest point 1 km away.",
    culturalSignificance: "Symbol of Hyderabad's Syncretic Ganga-Jamuni Tehzeeb, patron of Deccani Urdu literature, Kuchipudi dancers, and diamonds of international royalty.",
    festival: {
      name: "Golconda Sound & Light Show & Bonalu Festival",
      period: "July â€“ August & Year-Round",
      description: "Grand historic sound and light show narrated by Amitabh Bachchan; sacred Mahankali Bonalu festivities at the hilltop temple."
    },
    bestTime: "September to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Golconda+Fort+Hyderabad",
    wikiUrl: "https://en.wikipedia.org/wiki/Golconda_Fort",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGM9z4BwkhlfCLlK6wLNR041LK3CBPOjr5_PDomOqcyQ&s=10",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxRmzGMAbrpTmPhKa_HQtT46IG3VyLeBvayQIIUomoA&s=10", caption: "Bala Hissar Pavilion & 360-degree City View" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1FcvX-3QEi0SZrYYyP3ywHT-4Qu20u8_rEa2Rwb30w&s=10", caption: "Massive Iron-Spiked Fateh Darwaza Fort Gate" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H-mAGBu6TugpWJdCdw0KOfx63BklUp-5KdPQbDzj3q4lee2_juC53Dg&s=10",
      title: "360Â° Panorama - Golconda Bala Hissar Summit",
      hotspots: [
        { x: 50, y: 30, title: "Bala Hissar Throne Hall", desc: "Summit pavilion with 360-degree views over Hyderabad and the Qutb Shahi Tombs." },
        { x: 80, y: 70, title: "Fateh Darwaza Acoustic Dome", desc: "Clapping dome transmitting security signals across the fort in seconds." }
      ]
    },
    tags: ["Citadel", "Qutb Shahi", "Acoustics", "Koh-i-Noor", "Military Engineering"]
  },

  // ================= TAMIL NADU =================
  {
    id: "brihadeeswara-temple",
    name: "Brihadisvara Temple (Big Temple), Thanjavur",
    stateId: "TamilNadu",
    stateName: "Tamil Nadu",
    district: "Thanjavur",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1010 CE (Emperor Raja Raja Chola I)",
    architecturalStyle: "Pure Dravidian Granite Architecture with 216-ft Vimana",
    description: "A pinnacle of Chola architectural genius, the Brihadisvara Temple celebrated its millennial anniversary in 2010. Built entirely of 130,000 tonnes of granite transported over 50 kilometers, its 216-foot soaring Vimana is crowned by a monolithic 80-tonne granite Kumbam cupola hoisted via a 6-kilometer earthen ramp.",
    culturalSignificance: "Centerpiece of classical Bharatanatyam dance and Carnatic music, patronized with 400 temple dancers and musicians recorded in detailed Tamil inscriptions on the outer prakaram walls.",
    festival: {
      name: "Chithirai Brahamotsavam & Maha Shivaratri Natyanjali",
      period: "February â€“ March & April",
      description: "World-class classical dance festival featuring Bharatanatyam exponents from across India performing in front of the colossal Nandi."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Brihadisvara+Temple+Thanjavur",
    wikiUrl: "https://en.wikipedia.org/wiki/Brihadisvara_Temple,_Thanjavur",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZJ7nJKvRhLJ-RXU7Mkx8S4bY5r_b_i_k3hMPd3rCxpYgY96r1nn7Yx8&s=10",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAuEwC8mKHXZa7CZOqxEA3rcFx8EHoRqDaS4bT_I0PxZkSX3McaBr1AT7&s=10", caption: "216-foot Soaring Granite Raja Gopuram" },
      { url: "https://rangersofmountains.com/wp-content/uploads/2024/11/nandi-sculpture-at-chamundi-hill-mysore-1.webp", caption: "Monolithic 25-Tonne Granite Nandi Mandapa" },
      
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2CuRSR3l4Lze0plyCuX1TuHPS2iE2J6fRh0fBJXRU3LtzG7ewmkxgSHh&s=10",
      title: "360Â° Panorama - Brihadisvara Temple Grand Courtyard",
      hotspots: [
        { x: 50, y: 35, title: "80-Tonne Monolithic Kumbam", desc: "Granite capstone carved from a single boulder hoisted 216 feet into the sky." },
        { x: 20, y: 65, title: "Chola Tamil Epigraphy", desc: "Thousands of lines of stone inscriptions recording treasury gifts, dancers, and military campaigns." },
        { x: 80, y: 70, title: "Monolithic Nandi", desc: "Single-stone granite bull measuring 12 feet high and 20 feet long." }
      ]
    },
    tags: ["UNESCO", "Chola Dynasty", "Dravidian", "Granite Marvel", "Bharatanatyam"]
  },

  // ================= KARNATAKA =================
  {
    id: "hampi-monuments",
    name: "Group of Monuments at Hampi",
    stateId: "Karnataka",
    stateName: "Karnataka",
    district: "Vijayanagara / Ballari",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1336â€“1565 CE (Vijayanagara Empire, Emperor Krishnadevaraya)",
    architecturalStyle: "Dravidian & Vijayanagara Rock Architecture with Monolithic Carvings",
    description: "Spread over 41 square kilometers amidst a surreal boulder-strewn landscape along the Tungabhadra River, Hampi was the fabulously wealthy capital of the Vijayanagara Empire. Highlights include the iconic Stone Chariot at the Vijaya Vittala Temple with musical pillars, Virupaksha Temple, Queen's Bath, and the Elephant Stables.",
    culturalSignificance: "Capital of one of the greatest empires in Indian history, documented by Persian ambassador Abdur Razzaq and Portuguese traveler Domingo Paes as comparable to Rome in splendor.",
    festival: {
      name: "Hampi Utsav (Vijaya Utsava)",
      period: "November / January",
      description: "A 3-day cultural festival illuminating the ancient ruins with classical Hindustani and Carnatic concerts, fireworks, and heritage walks."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hampi+Vijayanagara+Karnataka",
    wikiUrl: "https://en.wikipedia.org/wiki/Hampi",
    imageUrl: "https://carams.in/wp-content/uploads/2018/11/Hampi.jpg",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9gjX9PlcAfeBgBKltgGJhcbplH53aN7dPtpVobBlRu97-2qUBXedyOc&s=10", caption: "World-Famous Monolithic Stone Chariot at Vittala Temple" },
      { url: "https://cdn.britannica.com/36/250236-050-96BFE0EE/Virupaksha-Temple-Hampi-Karnataka-India.jpg", caption: "Virupaksha Temple Gopuram & Boulder Landscape" },
      { url: "https://hampi.in/wp-content/uploads/2011/05/elephnat-stables.jpg", caption: "Royal Enclosure & Elephant Stables" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyS54YEviwNWbTfl1yxiyOY51kUaQmaQwkn7gYfm5q7gj71sfMJmfmd-k&s=10",
      title: "360Â° Panorama - Vittala Temple Courtyard, Hampi",
      hotspots: [
        { x: 50, y: 50, title: "Monolithic Stone Chariot", desc: "Shrine dedicated to Garuda designed as a temple chariot with rotating stone wheels." },
        { x: 20, y: 40, title: "Musical Pillars (SaReGaMa Pillars)", desc: "56 carved resonant granite pillars emitting musical notes when gently tapped." },
        { x: 80, y: 65, title: "Matanga Hill Vista", desc: "Holy hill where Sugriva took refuge in the Ramayana, offering 360Â° sunset panoramas." }
      ]
    },
    tags: ["UNESCO", "Vijayanagara", "Stone Chariot", "Musical Pillars", "Boulders"]
  },

  // ================= MAHARASHTRA =================
  {
    id: "ajanta-caves",
    name: "Ajanta Cave Murals & Monolithic Sanctuaries",
    stateId: "Maharashtra",
    stateName: "Maharashtra",
    district: "Chhatrapati Sambhajinagar (Aurangabad)",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "2nd Century BCE â€“ 5th Century CE (Satavahanas & Vakataka Emperor Harishena)",
    architecturalStyle: "Rock-Cut Buddhist Chaityas & Viharas with Tempera Frescoes",
    description: "Carved into a 75-meter crescent-shaped gorge along the Waghur River, Ajanta's 30 rock-cut caves preserve the greatest masterpiece of ancient Indian classical art. The tempera mural frescoes depicting the Bodhisattvas Padmapani and Vajrapani, Jataka tales, and courtly life showcase unparalleled grace, expressive eyes, and natural mineral pigments.",
    culturalSignificance: "The fountainhead of Asian Buddhist art that directly influenced frescoes across Dunhuang in China and Sigiriya in Sri Lanka. Rediscovered in 1819 by British officer John Smith during a tiger hunt.",
    festival: {
      name: "Ajanta-Ellora International Dance & Music Festival",
      period: "January â€“ February",
      description: "Classical Kathak, Odissi, and sitar virtuosos perform against the dramatic backdrop of illuminated ancient cave facades."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ajanta+Caves+Maharashtra",
    wikiUrl: "https://en.wikipedia.org/wiki/Ajanta_Caves",
    imageUrl: "https://im.whatshot.in/img/2020/Jul/shutterstock-534449392-cropped-1577710633-1595817669.jpg?w=375&h=375&q=60&wp=1",
    
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_keyjUjWFfkLuwAmDG9nxS4U5dcSQ6vwlvawKlWRLQ&s=10", caption: "Cave 19 Chaitya Hall with Ribbed Vault & Stupa" },
    
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3gvHQuG2SoH96vyN89oQY9p8oE21iDk4DQkj4R0tRw&s=10", caption: "Horseshoe-Shaped Waghur River Gorge Vista" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5C4sbwLTMeS9JwQuLl_aGHyz43qqL_U1NahprpT8p-Q&s=10",
      title: "360Â° Panorama - Ajanta Cave 26 Reclining Buddha",
      hotspots: [
        { x: 35, y: 45, title: "29-Foot Reclining Buddha", desc: "Monolithic sculpture of Buddha entering Mahaparinirvana carved from the basalt cliff." },
        { x: 75, y: 55, title: "Chaitya Vault Pillars", desc: "Monolithic columns with carved meditating Buddhas and floral medallions." }
      ]
    },
    tags: ["UNESCO", "Buddhist Art", "Rock-Cut Caves", "Frescoes", "Vakataka Dynasty"]
  },

  // ================= RAJASTHAN =================
  {
    id: "amer-fort",
    name: "Amer Palace & Amber Fort Complex, Jaipur",
    stateId: "Rajasthan",
    stateName: "Rajasthan",
    district: "Jaipur",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1592 CE (Raja Man Singh I, expanded by Mirza Raja Jai Singh)",
    architecturalStyle: "Rajput-Mughal Fusion Architecture with Yellow Sandstone & Marble",
    description: "Perched majestically on the rugged Cheel ka Teela (Hill of Eagles) overlooking Maota Lake, Amer Fort is celebrated for its opulent royal courtyards, marble lattice windows, and the world-famous Sheesh Mahal (Hall of Mirrors) inlaid with concave Belgian glass that illuminates the entire hall with a single candle.",
    culturalSignificance: "Inscribed as part of the UNESCO Hill Forts of Rajasthan. Connected via subterranean tunnels to Jaigarh Fort, home to the Jaivana cannon â€” the world's largest cannon on wheels.",
    festival: {
      name: "Jaipur Literature Festival & Elephant Festival at Amer",
      period: "January â€“ March & Gangaur Festival",
      description: "Spectacular royal processions with decorated horses, traditional Ghoomar dance, and illuminated musical sound and light shows."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Amber+Fort+Jaipur+Rajasthan",
    wikiUrl: "https://en.wikipedia.org/wiki/Amer_Fort",
    imageUrl: "https://www.india.com/wp-content/uploads/2018/08/Amer-Fort-photo-1.jpg",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2DwqYAuNJMOYquvatmfF6y31N2zlnEASZy61iqZcY7fDDtnh-UjQf4I&s=10", caption: "Amer Fort Ramparts & Maota Lake Reflection" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVGQzJIrKYaH-WvxpNN-cn1HIBCzP1kiIhSgXd117x84NSUGKyy1YRJw&s=10", caption: "Sheesh Mahal (Glass Mirror Palace) Intricate Mosaics" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdemh0UgeGAqXx7HoUh8s_OkH_TlPKAVWm7RD0rkH8fA&s=10", caption: "Ganesh Pol Grand Gateway Frescoes" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlmtAuhay84qs890bR-YzaBit9VVAG47JkBxvWeb9FA&s=10",
      title: "360Â° Panorama - Amer Fort Jaleb Chowk Courtyard",
      hotspots: [
        { x: 30, y: 45, title: "Sheesh Mahal Mirror Hall", desc: "Thousands of convex glass mirrors creating a star-lit night sky effect." },
        { x: 70, y: 35, title: "Ganesh Pol Gateway", desc: "Three-tiered royal entrance gate adorned with delicate miniature paintings." },
        { x: 50, y: 75, title: "Maota Lake Kesar Kyari Garden", desc: "Saffron garden floating in the lake designed in geometric star patterns." }
      ]
    },
    tags: ["UNESCO", "Hill Forts", "Rajput Royalty", "Sheesh Mahal", "Jaipur"]
  },

  // ================= UTTAR PRADESH =================
  {
    id: "taj-mahal",
    name: "Taj Mahal Mausoleum & Charbagh Gardens, Agra",
    stateId: "UttarPradesh",
    stateName: "Uttar Pradesh",
    district: "Agra",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 5.0,
    builtIn: "1632â€“1653 CE (Mughal Emperor Shah Jahan, Ustad Ahmad Lahori)",
    architecturalStyle: "Indo-Islamic Mughal Architecture in Pure Makrana Marble",
    description: "An internationally acclaimed Wonder of the World and UNESCO World Heritage site, the Taj Mahal was commissioned by Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal. Built of translucent white Makrana marble from Rajasthan inlaid with 28 types of precious gemstones (Pietra Dura), the complex features perfect bilateral symmetry, four minarets tilted slightly outward, and reflecting lotus pools.",
    culturalSignificance: "Described by Nobel laureate Rabindranath Tagore as 'a teardrop on the cheek of time', it stands as the zenith of Mughal architectural symmetry and poetic craftsmanship.",
    festival: {
      name: "Taj Mahotsav Cultural Festival & Full Moon Viewing",
      period: "February 18â€“27 (10 Days) & Sharad Purnima",
      description: "Grand annual artisan craft fair with classical Kathak dancers, Awadhi food stalls, and special night viewing under the full moon."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra",
    wikiUrl: "https://en.wikipedia.org/wiki/Taj_Mahal",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ncjKKJOwI4U12PVKtkVZyfxaNskFBR4Lsyp4x2XPeg&s=10",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMzRceACqUoce8pI8aygidannvPHTPNr74-lySk4cVItqTnti8q-8Ukw&s=10", caption: "Iconic White Marble Dome & Reflecting Charbagh Pool" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvBxlhAPwp4zmY5gK9ADS1_uUMFQm_HtXmwJCKIo1Tw&s=10", caption: "Pietra Dura Gemstone Floral Inlay Detail" },
      { url: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=400%2Cheight=265%2Cdpr=2/tour_img/db7636119bdf780bc521f46c65b5b7c5165eb3bf130f0bfc8460646ff8c8cbfe.jpg", caption: "Mehtabh Bagh sundet" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Taj Mahal Central Garden Promenade",
      hotspots: [
        { x: 50, y: 35, title: "Central Onion Dome", desc: "Soaring 73-meter double dome surrounded by four smaller domed chattris." },
        { x: 20, y: 55, title: "Pietra Dura Parchin Kari", desc: "Semi-precious stones (lapis lazuli, jade, turquoise) embedded in pure white marble." },
        { x: 80, y: 65, title: "Yamuna River Bank", desc: "Northern overlook facing the Moonlight Garden (Mehtab Bagh)." }
      ]
    },
    tags: ["UNESCO", "Wonder of the World", "Mughal", "White Marble", "Pietra Dura"]
  },

  // ================= MADHYA PRADESH =================
  {
    id: "khajuraho-monuments",
    name: "Khajuraho Group of Temples, Chhatarpur",
    stateId: "MadhyaPradesh",
    stateName: "Madhya Pradesh",
    district: "Chhatarpur",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "950â€“1050 CE (Chandela Dynasty Kings Dhanga & Vidyadhara)",
    architecturalStyle: "Nagara Style Sandstone Superstructures with Erotic Sculptures",
    description: "The 25 surviving temples of Khajuraho represent the zenith of medieval Indian temple architecture and stone sculpture. The Kandariya Mahadeva Temple features a soaring 31-meter Shikhara simulating Mount Kailash, surrounded by 84 miniature spires (Urushringas). The intricate stone carvings depict spiritual transcendence alongside the celebration of human love, celestial dancers (Surasundaris), and daily medieval life.",
    culturalSignificance: "Celebrates the four Purusharthas (Dharma, Artha, Kama, Moksha) in Hindu philosophy. Inscribed as a UNESCO World Heritage site for its architectural harmony and artistic craftsmanship.",
    festival: {
      name: "Khajuraho Dance Festival",
      period: "February 20â€“26 (Annual)",
      description: "One of India's most prestigious open-air classical dance festivals, featuring Kathak, Bharatanatyam, Odissi, and Kuchipudi dancers set against illuminated temples."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Khajuraho+Temples+Madhya+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments",
    imageUrl: "https://media.assettype.com/outlooktraveller/2024-09-28/f6onhspi/shutterstock2152949513.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Y0EdMpEbTdTp6zdgEWn1jGbJ1xMJX13gRDiYq88-8uOBL5fjdUjIvUjY&s=10", caption: "Kandariya Mahadeva Temple Soaring Shikhara & Platform" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w93GHjn2tAi_ElE1YLcOrklEzIGAfEBq_ys0_fqp1WZtDsoFu8vuJkxb&s=10", caption: "Intricate Stone Friezes & Celestial Surasundaris" }
    ],
    virtualTour: {
      panoramaUrl: "https://www.culturalindia.net/iliimages/Khajuraho-Group-of-Monuments-ili-133-img-2.jpg",
      title: "360Â° Panorama - Western Group of Temples, Khajuraho",
      hotspots: [
        { x: 50, y: 35, title: "Kandariya Mahadeva Shikhara", desc: "31-meter spire composed of 84 graded subsidiary peaks imitating the Himalayas." },
        { x: 25, y: 65, title: "Lakshmana Temple Platform", desc: "One of the best preserved temples with a continuous narrative base frieze of royal hunts and battles." }
      ]
    },
    tags: ["UNESCO", "Chandela", "Nagara", "Kandariya Mahadeva", "Classical Dance"]
  },

  // ================= GUJARAT =================
  {
    id: "rani-ki-vav",
    name: "Rani ki Vav (The Queen's Stepwell), Patan",
    stateId: "Gujarat",
    stateName: "Gujarat",
    district: "Patan",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1063 CE (Commissioned by Queen Udayamati in memory of King Bhima I)",
    architecturalStyle: "Maru-Gurjara Inverted Temple Subterranean Architecture",
    description: "Designed as an inverted temple highlighting the sanctity of water, Rani ki Vav descends seven stepped levels into the earth across 64 meters of length and 27 meters of depth. Over 500 principal sculptures and 1,000 minor religious reliefs adorn the stepped corridors, featuring the Dashavatara (ten incarnations of Vishnu), celestial Apsaras, and intricate geometrical motifs.",
    culturalSignificance: "Represented on the Indian 100-rupee currency note. It remained silted under the Saraswati River for centuries, preserving its pristine sharp carvings until archaeological excavation in the 1980s.",
    festival: {
      name: "Rani ki Vav Utsav & Patan Patola Heritage Fair",
      period: "December â€“ January",
      description: "Winter cultural festival celebrating subterranean architecture, classical Garba dance, and double-ikat Patola weaving demonstrations."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rani+ki+Vav+Patan+Gujarat",
    wikiUrl: "https://en.wikipedia.org/wiki/Rani_ki_Vav",
    imageUrl: "https://img-cdn.publive.online/fit-in/1200x675/30-stades/media/media_files/epbRwtA3CpHCdlN8dXFU.jpg",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8us5qBhxosYo-GdXTyYNX17Y20fXaNV4Z1ShKX7aIag&s=10", caption: "Seven-Tiered Subterranean Stepped Gallery" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKVByHCgWq2dX5_d7sXi1bN7ervz6KchbFg5P_mAMGQ&s=10", caption: "Sheshashayi Vishnu & Dashavatara Carvings" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9bWekPyFbkUFNpdzmTtT2lq9f03Zr3vRv2NPaMhW2Ob1AjCtXqO456Y&s=10",
      title: "360Â° Panorama - Rani ki Vav Fourth Tier Pavilions",
      hotspots: [
        { x: 50, y: 55, title: "Sheshashayi Vishnu Relief", desc: "Exquisite carving of Vishnu reclining on thousand-headed serpent Sheshanaga." },
        { x: 25, y: 40, title: "Stepped Well Shaft", desc: "Circular 28-meter deep water reservoir flanked by pillared galleries." }
      ]
    },
    tags: ["UNESCO", "Stepwell", "Solanki Dynasty", "Maru-Gurjara", "Water Heritage"]
  },

  // ================= ODISHA =================
  {
    id: "konark-sun-temple",
    name: "Sun Temple of Konark (The Black Pagoda), Puri",
    stateId: "Odisha",
    stateName: "Odisha",
    district: "Puri",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1250 CE (King Narasimhadeva I of the Eastern Ganga Dynasty)",
    architecturalStyle: "Kalinga Rekha Deula Architecture as a Colossal Solar Chariot",
    description: "Conceived as a cosmic solar chariot driven by seven galloping horses across the heavens, the Konark Sun Temple features 24 colossal stone wheels carved with mathematical precision to function as accurate sundials, telling time down to the minute via shadow angles. Carved of Khondalite and chlorite stone on the shores of the Bay of Bengal.",
    culturalSignificance: "Described by Rabindranath Tagore: 'Here the language of stone surpasses the language of human.' Masterpiece of classical Odissi dance postures carved in the Natya Mandapa.",
    festival: {
      name: "Konark Dance Festival & Chandrabhaga Mela",
      period: "December 1â€“5 (Annual) & Magha Saptami",
      description: "International classical dance festival on an open-air stage against the floodlit backdrop of the monumental sun chariot."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Konark+Sun+Temple+Odisha",
    wikiUrl: "https://en.wikipedia.org/wiki/Konark_Sun_Temple",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe7hM_J_8QUHUaGZZZa9g91z3K9KrAV1Rb7jC_MYXZOG-8ErqaLhIaa8&s=10",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzibDqQfbGsDuhbZeH9ay4Ov6XJMKl7X24HzHFLnu2XT83YRe5I7owKrZ&s=10", caption: "Colossal Sun Chariot Wheel (Sundial) Carvings" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVyfvEyrktGKfaUDNGa-CUhdYPtVmYuuj7T1wlxCSE--tlZBlbC-hmkE&s=10", caption: "Jagamohana (Assembly Hall) & Natya Mandapa" }
    ],
    virtualTour: {
      panoramaUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/80/32/10.jpg",
      title: "360Â° Panorama - Konark Sun Chariot Wheels & Courtyard",
      hotspots: [
        { x: 50, y: 50, title: "Sun Chariot Wheel", desc: "9.9-foot diameter wheel with 8 major spokes and 8 minor spokes acting as a precision sundial." },
        { x: 20, y: 40, title: "Natya Mandapa", desc: "Pillared dance hall carved with musicians playing mridangam, cymbals, and flutes in Odissi poses." }
      ]
    },
    tags: ["UNESCO", "Kalinga", "Sun Temple", "Sundial", "Odissi Dance"]
  },

  // ================= KERALA =================
  {
    id: "padmanabhaswamy-temple",
    name: "Sree Padmanabhaswamy Temple, Thiruvananthapuram",
    stateId: "Kerala",
    stateName: "Kerala",
    district: "Thiruvananthapuram",
    category: "Ancient Royal Temple & Vaults",
    isUnesco: false,
    rating: 4.9,
    builtIn: "8th Century CE onwards (Travancore Royal Dynasty & King Marthanda Varma)",
    architecturalStyle: "Fusion of Kerala Indigenous Timber & Tamil Dravidian Gopuram",
    description: "Revered as one of the 108 Divya Desams, Sree Padmanabhaswamy Temple is famous for its 18-foot monolithic idol of Lord Vishnu reclining on the cosmic serpent Anantha (Anantasayana posture), viewed through three separate doors. It is recognized as the world's wealthiest religious institution due to its legendary subterranean treasure vaults.",
    culturalSignificance: "The Travancore Maharajas ruled as 'Padmanabha Dasa' (servants of the deity). Houses the 365-pillar sculpted corridor (Ottakkal Mandapam) and the sacred Padma Theertham tank.",
    festival: {
      name: "Alpashi & Panguni Utsavam (Arattu Procession)",
      period: "October â€“ November & March â€“ April",
      description: "Grand 10-day festival culminating in the royal Arattu procession where the royal family escorts the deity on foot to Shanghumukham Beach."
    },
    bestTime: "September to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Padmanabhaswamy+Temple+Trivandrum",
    wikiUrl: "https://en.wikipedia.org/wiki/Padmanabhaswamy_Temple",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5YWw7ANT9Zgx8Sc_KnoOw9ZrUR40nZfCqIcvT9C3jDw&s=10",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtU0LGvAsfI3e9Moj3CY-FGN2NFC_2q3fmA4MxNzwfKw2NZY44Gs6QeU&s=10", caption: "100-Foot 7-Tiered Dravidian Gopuram & Sacred Tank" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhRffz5mICru5tU5kAJds_oXBD6mzVpYBCJ7o-bA-8Q&s=10", caption: "365 Sculpted Granite Pillars of the Corridor" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uPOnLQ4eYjFT3O5o4wWIm2By7Muf7wvo3Liu8TRj82ufW4KMirMLBMw&s=10",
      title: "360Â° Panorama - Padma Theertham & Padmanabhaswamy Gopuram",
      hotspots: [
        { x: 50, y: 35, title: "7-Tiered Raja Gopuram", desc: "Built in 1565 CE with granite foundation and 100-foot brick superstructure with clockwork bells." },
        { x: 25, y: 65, title: "Padma Theertham Sacred Pond", desc: "Holy temple tank reflecting the illuminated golden spires during Deeparadhana." }
      ]
    },
    tags: ["Travancore", "Anantasayana", "Sacred Vaults", "Kerala Heritage", "Pilgrimage"]
  },

  // ================= PUNJAB =================
  {
    id: "golden-temple",
    name: "Sri Harmandir Sahib (The Golden Temple), Amritsar",
    stateId: "Punjab",
    stateName: "Punjab",
    district: "Amritsar",
    category: "Sacred Sikh Sanctuary & Golden Shrine",
    isUnesco: false,
    rating: 5.0,
    builtIn: "1581â€“1604 CE (Guru Ram Das, Guru Arjan Dev & Maharaja Ranjit Singh)",
    architecturalStyle: "Sikh Architecture clad in Gilded Copper & Marble Inlay",
    description: "Surrounded by the holy Amrit Sarovar (Pool of Nectar), Sri Harmandir Sahib is the holiest Gurdwara of Sikhism. Built with four open entrances symbolizing universal welcoming for all castes and creeds, its upper floors are covered in 500 kilograms of pure gold leaf. The complex houses the world's largest free community kitchen (Guru Ram Das Langar), feeding up to 100,000 people daily regardless of background.",
    culturalSignificance: "Repository of the original Adi Granth installed by Guru Arjan Dev in 1604. Adjacent to the Akal Takht, the highest seat of temporal authority for the Sikh Khalsa.",
    festival: {
      name: "Baisakhi & Guru Nanak Gurpurab",
      period: "April 13â€“14 & November (Kartik Purnima)",
      description: "Magnificent nighttime illumination with thousands of floating lamps, continuous 48-hour Akhand Path recitation, and classical Gurbani Kirtan."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Golden+Temple+Amritsar",
    wikiUrl: "https://en.wikipedia.org/wiki/Golden_Temple",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnomHTvxNPMikPZuFI_fkj9OY1AuIYsJSTFp9lQuVqgw&s=10",
    images: [
      { url: "https://www.goldentempleamritsar.org/images/golden-temple/golden-temple-night-illumination-reflection-amritsar.webp", caption: "Golden Temple Sanctum Illuminated over the Amrit Sarovar" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFoorMrWbQSCuzt2zVx8H4Mh6c65fn315Gtzqt13GufA&s=10", caption: "Guru Ram Das Langar Hall Community Service" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1wnL2iYkg1kDZ4xIQrVqC0PlmQT7mAKQUpq-Nd0sKA&s=10", caption: "Akal Takht Historical Edifice & Causeways" }
    ],
    virtualTour: {
      panoramaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu2q2mz_L-mC6PaUdSmuGMlPrFfeVdw6_kBrdboI2UckzOMbooPnjpeIq&s=10",
      title: "360Â° Panorama - Amrit Sarovar Parikrama Causeway",
      hotspots: [
        { x: 50, y: 45, title: "Golden Sanctum (Darbar Sahib)", desc: "Two-story gold-plated shrine where holy Guru Granth Sahib is continuously recited." },
        { x: 25, y: 65, title: "Amrit Sarovar Holy Waters", desc: "Man-made holy pool excavated by Guru Ram Das in 1577 CE." },
        { x: 80, y: 40, title: "Akal Takht (Throne of the Timeless)", desc: "Founded by Guru Hargobind in 1606 representing Sikh spiritual sovereignty." }
      ]
    },
    tags: ["Sikhism", "Golden Temple", "Langar", "Amritsar", "Spiritual Unity"]
  },

  // ================= DELHI =================
  {
    id: "qutub-minar",
    name: "Qutb Minar & Iron Pillar Complex, Mehrauli",
    stateId: "Delhi",
    stateName: "Delhi",
    district: "South Delhi (Mehrauli)",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.8,
    builtIn: "1192â€“1220 CE (Qutb-ud-din Aibak, Iltutmish, Feroz Shah Tughlaq)",
    architecturalStyle: "Indo-Islamic Fluted Minaret with Calligraphy & Hindu-Jain Spolia",
    description: "Rising 72.5 meters high with five distinct tapering tiers, Qutb Minar is the world's tallest brick minaret. It features delicate fluting, Quranic calligraphy, and intricate stalactite honeycomb balconies. The complex includes the 4th-century CE Gupta Iron Pillar that has resisted rust for over 1,600 years, and the soaring Alai Darwaza gateway.",
    culturalSignificance: "Marks the establishment of the Delhi Sultanate. The rustless metallurgy of the Ashoka/Chandra Iron Pillar remains a world-renowned ancient Indian engineering marvel.",
    festival: {
      name: "Qutub Festival of Classical Music & Dance",
      period: "November â€“ December",
      description: "A 3-day twilight festival featuring national classical vocalists and dancers set against the illuminated 800-year-old sandstone minaret."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Qutub+Minar+Delhi",
    wikiUrl: "https://en.wikipedia.org/wiki/Qutb_Minar_complex",
    imageUrl: "https://www.jaypeehotels.com/blog/wp-content/uploads/2023/11/Blog-5.jpg",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Orkd89Id3HDoTkD2YQR4wBZVRnDF9SCkh3O7QhStKA&s=10", caption: "72.5-Meter Fluted Red Sandstone Minaret" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnCbVnBTNtTWDOvQ4R3cnfQyNTI_Jvmmy8xycwMoS2FORBxNlDa8CoJmj&s=10", caption: "1600-Year-Old Rustless Gupta Iron Pillar & Quwwat-ul-Islam" }
    ],
    virtualTour: {
      panoramaUrl: "https://smarthistory.org/wp-content/uploads/2020/06/Alai-Darwaza-2-scaled.jpg",
      title: "360Â° Panorama - Qutb Complex Courtyard",
      hotspots: [
        { x: 50, y: 30, title: "Qutb Minar Tower", desc: "Tapering from 14.3 meters diameter at base to 2.7 meters at the summit." },
        { x: 75, y: 65, title: "Gupta Rustless Iron Pillar", desc: "Forged wrought iron with high phosphorus and passive iron oxide film resisting corrosion since 400 CE." }
      ]
    },
    tags: ["UNESCO", "Delhi Sultanate", "Iron Pillar", "Minaret", "Architecture"]
  }
];

// Module export for Node.js / Web
if (typeof module !== "undefined" && module.exports) {
  module.exports = { STATES_DATA, HERITAGE_SITES };
}