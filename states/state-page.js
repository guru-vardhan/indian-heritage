/**
 * Indian Heritage - Enhanced State Page Controller
 * Handles Interactive Monument Switching, Photo Carousels, Tabs, Audio Narration, Search & Lightbox
 */

let currentStateId = "";
let stateSites = [];
let activeSiteIndex = 0;
let carouselImages = [];
let carouselIndex = 0;
let isAudioPlaying = false;
let speechSynth = window.speechSynthesis;
let currentUtterance = null;
let speechRate = 1.0;
let activeCategoryFilter = "all";
let monumentSearchQuery = "";

// Multi-Tier Image Fallback
function getMonumentFallbackSvg(title) {
  const safeTitle = (title || "Heritage Site").replace(/[<>&"]/g, "").substring(0, 32);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="50%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="400" cy="210" r="85" fill="#fef3c7" fill-opacity="0.15" stroke="#c05621" stroke-width="2"/>
    <text x="50%" y="225" dominant-baseline="middle" text-anchor="middle" font-size="64">&#127989;</text>
    <text x="50%" y="340" dominant-baseline="middle" text-anchor="middle" font-family="'Cinzel', serif" font-size="22" font-weight="700" fill="#f8fafc">${safeTitle}</text>
    <text x="50%" y="375" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#fbbf24" letter-spacing="2">ARCHAEOLOGICAL ARCHIVE</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function handleImageError(imgElement) {
  if (!imgElement) return;
  imgElement.onerror = null;

  const isBanner = imgElement.id === "stateSiteBanner" || 
                   imgElement.classList.contains("site-banner-img") ||
                   (imgElement.offsetWidth > 150);

  if (isBanner) {
    imgElement.src = getMonumentFallbackSvg(imgElement.alt || "Indian Cultural Heritage");
    return;
  }

  const wrapper = imgElement.parentElement;
  let icon = "&#127989;";
  const altLower = (imgElement.alt || "").toLowerCase();
  if (altLower.includes("temple") || altLower.includes("mandir")) icon = "&#129517;";
  else if (altLower.includes("fort") || altLower.includes("palace")) icon = "&#127984;";
  else if (altLower.includes("cave") || altLower.includes("rock")) icon = "&#128511;";
  else if (altLower.includes("mosque") || altLower.includes("tomb")) icon = "&#128332;";
  else if (altLower.includes("sun") || altLower.includes("chariot")) icon = "&#9728;&#65039;";
  else if (imgElement.alt) icon = imgElement.alt.trim().charAt(0).toUpperCase();

  if (wrapper && (wrapper.classList.contains("site-thumb-wrapper") || wrapper.classList.contains("result-thumb-wrapper"))) {
    wrapper.innerHTML = `<div class="site-thumb-fallback">${icon}</div>`;
  } else if (wrapper) {
    const fallback = document.createElement("div");
    fallback.className = "site-thumb-fallback";
    fallback.style.width = (imgElement.offsetWidth || 56) + "px";
    fallback.style.height = (imgElement.offsetHeight || 56) + "px";
    fallback.style.borderRadius = "8px";
    fallback.innerHTML = icon;
    imgElement.replaceWith(fallback);
  } else {
    imgElement.src = getMonumentFallbackSvg(imgElement.alt);
  }
}
window.handleImageError = handleImageError;
window.getMonumentFallbackSvg = getMonumentFallbackSvg;

function initStatePage(stateId) {
  currentStateId = stateId;
  initTheme();
  initStateSwitcher();

  if (typeof HERITAGE_SITES !== "undefined") {
    stateSites = HERITAGE_SITES.filter(s => s.stateId.toLowerCase() === stateId.toLowerCase());
  }

  // Automatic fallback if specific state entry is empty
  if ((!stateSites || stateSites.length === 0) && typeof STATES_DATA !== "undefined") {
    const clean = stateId.toLowerCase().replace(/[\s\-_]/g, "");
    const stObj = STATES_DATA.find(s => 
      s.id.toLowerCase() === clean || 
      s.name.toLowerCase().replace(/[\s\-_]/g, "") === clean ||
      s.name.toLowerCase() === stateId.toLowerCase()
    );
    if (stObj) {
      stateSites = [{
        id: `${stObj.id.toLowerCase()}-heritage-portal`,
        name: `${stObj.name} Cultural Citadel`,
        stateId: stObj.id,
        stateName: stObj.name,
        district: stObj.capital || stObj.name,
        category: "Living Heritage & Architecture",
        isUnesco: true,
        rating: 4.9,
        builtIn: stObj.dynasties || "Ancient & Medieval Historic Era",
        architecturalStyle: `${stObj.region} Classical Tradition`,
        description: `Welcome to the official digital chronicle of ${stObj.name}. Celebrated for its glorious civilizational legacy, sacred pilgrimage landmarks, and vibrant indigenous art forms.`,
        culturalSignificance: `Renowned for traditional folk arts (${stObj.classicalDance || 'classical dances'}), distinct cultural heritage, and regional cuisine (${stObj.cuisine || 'traditional gastronomy'}).`,
        festival: {
          name: `${stObj.name} State Heritage Utsav`,
          period: "Celebrated Annually",
          description: `Vibrant regional festivities featuring traditional dance (${stObj.classicalDance || 'folk arts'}), musical heritage, and grand processions.`
        },
        bestTime: "October to March (Ideal sightseeing weather)",
        mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stObj.name + ' Tourism')}`,
        wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(stObj.name)}`,
        imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
        images: [
          { url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80", caption: `${stObj.name} Cultural Monument` },
          { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: `Architectural Heritage of ${stObj.name}` }
        ],
        virtualTour: {
          panoramaUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2400&q=90",
          title: `360° Panorama - ${stObj.name}`,
          hotspots: [
            { x: 30, y: 40, title: "Architectural Citadel", desc: `Historic monument in ${stObj.name}.` },
            { x: 70, y: 55, title: "Cultural Traditions", desc: `Crafts & Culture: ${stObj.giCrafts || 'Handloom and Traditional Art'}.` }
          ]
        },
        tags: ["Heritage", "Culture", "Tourism", stObj.region]
      }];
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const targetSiteId = urlParams.get("site");
  let targetIndex = 0;
  if (targetSiteId && stateSites.length > 0) {
    const foundIdx = stateSites.findIndex(s => s.id.toLowerCase() === targetSiteId.toLowerCase());
    if (foundIdx !== -1) targetIndex = foundIdx;
  }

  if (stateSites.length > 0) {
    renderSiteList();
    selectSite(targetIndex);
  }

  initTabs();
  initMonumentSearchAndFilters();
  initHorizontalScroll();
  initCarouselListeners();
  initAudioGuideListeners();
  initVirtualTour();
  initLightbox();
  initShare();
}

function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const savedTheme = localStorage.getItem("heritage_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("heritage_theme", "light");
      } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("heritage_theme", "dark");
      }
    });
  }
}

function initStateSwitcher() {
  const switcher = document.getElementById("state-switcher-select");
  if (!switcher || typeof STATES_DATA === "undefined") return;

  switcher.innerHTML = "";
  STATES_DATA.forEach(state => {
    const opt = document.createElement("option");
    opt.value = state.id;
    opt.textContent = `${state.icon} ${state.name}`;
    if (state.id.toLowerCase() === currentStateId.toLowerCase()) {
      opt.selected = true;
    }
    switcher.appendChild(opt);
  });

  switcher.addEventListener("change", (e) => {
    const targetState = STATES_DATA.find(s => s.id === e.target.value);
    if (targetState) {
      const fileName = targetState.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".html";
      window.location.href = fileName;
    }
  });
}

function renderSiteList() {
  const container = document.getElementById("state-monuments-list");
  const countBadge = document.getElementById("state-monuments-count");
  if (!container) return;

  let filtered = stateSites;

  if (activeCategoryFilter !== "all") {
    if (activeCategoryFilter === "unesco") {
      filtered = filtered.filter(s => s.isUnesco);
    } else {
      filtered = filtered.filter(s => (s.category || "").toLowerCase().includes(activeCategoryFilter.toLowerCase()));
    }
  }

  if (monumentSearchQuery) {
    const q = monumentSearchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(q) || 
      (s.district && s.district.toLowerCase().includes(q)) ||
      (s.category && s.category.toLowerCase().includes(q)) ||
      (s.architecturalStyle && s.architecturalStyle.toLowerCase().includes(q))
    );
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Site${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted); font-size: 0.9rem; width: 100%;">
        <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">🔍</span>
        No heritage monuments found matching your search.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((site) => {
    const realIdx = stateSites.findIndex(s => s.id === site.id);
    const isSelected = realIdx === activeSiteIndex;
    const unescoTag = site.isUnesco ? '<span class="card-unesco-pill">🏛️ UNESCO</span>' : '';
    const ratingBadge = `<span class="card-rating-badge">★ ${site.rating || '4.8'}</span>`;
    
    return `
      <div class="horizontal-monument-card search-result-item ${isSelected ? 'selected' : ''}" data-index="${realIdx}">
        <div class="card-media-wrapper site-thumb-wrapper">
          <img src="${site.imageUrl || ''}" alt="${site.name}" class="card-media-img site-thumb" loading="lazy" onerror="handleImageError(this)">
          <span class="card-category-tag">${site.category || 'Monument'}</span>
          ${unescoTag}
          ${ratingBadge}
        </div>
        <div class="card-body-content result-info">
          <div class="card-title result-title">${site.name}</div>
          <div class="card-meta result-meta">
            <span>📍 ${site.district || site.stateName}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".horizontal-monument-card, .search-result-item").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"), 10);
      selectSite(idx);
    });
  });
}

function initMonumentSearchAndFilters() {
  const searchInput = document.getElementById("monumentSearchInput");
  const filterPills = document.querySelectorAll("#monumentFilterPills .monument-filter-pill, #monumentFilterPills .filter-pill");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      monumentSearchQuery = e.target.value.trim();
      renderSiteList();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategoryFilter = pill.getAttribute("data-category") || "all";
      renderSiteList();
    });
  });
}

function initHorizontalScroll() {
  const track = document.getElementById("state-monuments-list");
  const leftBtn = document.getElementById("stripScrollLeft");
  const rightBtn = document.getElementById("stripScrollRight");

  if (track && leftBtn) {
    leftBtn.addEventListener("click", () => {
      track.scrollBy({ left: -280, behavior: "smooth" });
    });
  }
  if (track && rightBtn) {
    rightBtn.addEventListener("click", () => {
      track.scrollBy({ left: 280, behavior: "smooth" });
    });
  }

  // Mouse Wheel horizontal scroll support
  if (track) {
    track.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0 && track.scrollWidth > track.clientWidth) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    // Click & Drag slide bar support
    let isDown = false;
    let startX, scrollLeft;
    track.addEventListener("mousedown", (e) => {
      isDown = true;
      track.style.cursor = "grabbing";
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener("mouseleave", () => {
      isDown = false;
      track.style.cursor = "pointer";
    });
    track.addEventListener("mouseup", () => {
      isDown = false;
      track.style.cursor = "pointer";
    });
    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
  }
}

function selectSite(index) {
  if (index < 0 || index >= stateSites.length) return;
  activeSiteIndex = index;
  const site = stateSites[index];

  // Update active card class
  document.querySelectorAll("#state-monuments-list .horizontal-monument-card, #state-monuments-list .search-result-item").forEach((card) => {
    const cardIdx = parseInt(card.getAttribute("data-index"), 10);
    card.classList.toggle("selected", cardIdx === index);
  });

  // Smooth scroll selected card into horizontal center view
  const activeCard = document.querySelector(`.horizontal-monument-card[data-index="${index}"], .search-result-item[data-index="${index}"]`);
  if (activeCard && activeCard.scrollIntoView) {
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Populate Details
  const titleEl = document.getElementById("site-name-display");
  if (titleEl) titleEl.textContent = site.name;

  const catEl = document.getElementById("site-category-tag");
  if (catEl) catEl.textContent = site.category || "Cultural Monument";

  const unescoEl = document.getElementById("site-unesco-badge");
  if (unescoEl) {
    unescoEl.style.display = site.isUnesco ? "inline-flex" : "none";
  }

  const eraEl = document.getElementById("fact-built-in");
  if (eraEl) eraEl.textContent = site.builtIn || "Historical Era";

  const archEl = document.getElementById("fact-arch-style");
  if (archEl) archEl.textContent = site.architecturalStyle || "Indian Traditional Architecture";

  const districtEl = document.getElementById("fact-district");
  if (districtEl) districtEl.textContent = site.district || site.stateName;

  const bestTimeEl = document.getElementById("fact-best-time");
  if (bestTimeEl) bestTimeEl.textContent = site.bestTime || "October to March (Pleasant)";

  const descEl = document.getElementById("site-description-text");
  if (descEl) descEl.textContent = site.description || "";

  const cultEl = document.getElementById("site-cultural-significance");
  if (cultEl) cultEl.textContent = site.culturalSignificance || "";

  const festNameEl = document.getElementById("festival-name");
  if (festNameEl) festNameEl.textContent = site.festival?.name || "Annual Utsav & Celebrations";

  const festDescEl = document.getElementById("festival-desc");
  if (festDescEl) festDescEl.textContent = site.festival?.description || "Traditional rituals and grand seasonal celebrations.";

  const mapsBtn = document.getElementById("link-google-maps");
  if (mapsBtn) mapsBtn.href = site.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(site.name)}`;

  const wikiBtn = document.getElementById("link-wikipedia");
  if (wikiBtn) wikiBtn.href = site.wikiUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(site.name)}`;

  // Images Carousel
  carouselImages = (site.images && site.images.length > 0) ? site.images : [{ url: site.imageUrl, caption: site.name }];
  carouselIndex = 0;
  updateCarousel();

  // Load 360 Virtual Tour
  loadSiteVirtualTour(site);

  // Stop previous audio
  stopAudio();
}

function initTabs() {
  const tabButtons = document.querySelectorAll(".state-tab-btn");
  const tabPanels = document.querySelectorAll(".state-tab-panel, .tab-pane");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetTab = btn.getAttribute("data-tab");
      const panel = document.getElementById(`tab-panel-${targetTab}`);
      if (panel) panel.classList.add("active");
    });
  });
}

function initCarouselListeners() {
  const prevBtn = document.getElementById("prevSlideBtn");
  const nextBtn = document.getElementById("nextSlideBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (carouselImages.length === 0) return;
      carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (carouselImages.length === 0) return;
      carouselIndex = (carouselIndex + 1) % carouselImages.length;
      updateCarousel();
    });
  }
}

function updateCarousel() {
  const banner = document.getElementById("stateSiteBanner");
  const caption = document.getElementById("carouselCaptionText");
  const counter = document.getElementById("carouselCounter");
  const dotsContainer = document.getElementById("carouselDots");
  const thumbsContainer = document.getElementById("carouselThumbnails") || document.getElementById("carouselThumbs");

  if (carouselImages.length === 0) return;
  const currentImg = carouselImages[carouselIndex];

  if (banner) {
    banner.src = currentImg.url || "";
    banner.alt = currentImg.caption || "Monument View";
  }

  if (caption) {
    caption.textContent = currentImg.caption || "Heritage Architecture View";
  }

  if (counter) {
    counter.textContent = `${carouselIndex + 1} / ${carouselImages.length}`;
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = carouselImages.map((_, idx) => `
      <span class="carousel-dot ${idx === carouselIndex ? 'active' : ''}" onclick="goToSlide(${idx})"></span>
    `).join("");
  }

  if (thumbsContainer) {
    if (carouselImages.length > 1) {
      thumbsContainer.style.display = "flex";
      thumbsContainer.innerHTML = carouselImages.map((img, idx) => `
        <img src="${img.url}" alt="${img.caption || ''}" class="carousel-thumb ${idx === carouselIndex ? 'active' : ''}" onclick="goToSlide(${idx})" onerror="handleImageError(this)">
      `).join("");
    } else {
      thumbsContainer.style.display = "none";
      thumbsContainer.innerHTML = "";
    }
  }
}

window.goToSlide = function(idx) {
  if (idx >= 0 && idx < carouselImages.length) {
    carouselIndex = idx;
    updateCarousel();
  }
};

// Audio Guide
function initAudioGuideListeners() {
  const playBtn = document.getElementById("ttsPlayBtn");
  const stopBtn = document.getElementById("ttsStopBtn");
  const speedBtn = document.getElementById("ttsSpeedBtn");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (isAudioPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });
  }

  if (stopBtn) {
    stopBtn.addEventListener("click", stopAudio);
  }

  if (speedBtn) {
    speedBtn.addEventListener("click", () => {
      if (speechRate === 1.0) speechRate = 1.25;
      else if (speechRate === 1.25) speechRate = 0.85;
      else speechRate = 1.0;
      speedBtn.textContent = `${speechRate}x`;
      if (isAudioPlaying) {
        stopAudio();
        playAudio();
      }
    });
  }
}

function playAudio() {
  if (!speechSynth) return;
  const site = stateSites[activeSiteIndex];
  if (!site) return;

  const textToRead = `${site.name}, located in ${site.district || site.stateName}. ${site.description} Architectural style: ${site.architecturalStyle}. Historical period: ${site.builtIn}. ${site.culturalSignificance}`;

  speechSynth.cancel();
  currentUtterance = new SpeechSynthesisUtterance(textToRead);
  currentUtterance.rate = speechRate;

  currentUtterance.onstart = () => {
    isAudioPlaying = true;
    updateAudioUI();
  };

  currentUtterance.onend = () => {
    isAudioPlaying = false;
    updateAudioUI();
  };

  currentUtterance.onerror = () => {
    isAudioPlaying = false;
    updateAudioUI();
  };

  speechSynth.speak(currentUtterance);
}

function pauseAudio() {
  if (speechSynth && isAudioPlaying) {
    speechSynth.cancel();
    isAudioPlaying = false;
    updateAudioUI();
  }
}

function stopAudio() {
  if (speechSynth) {
    speechSynth.cancel();
    isAudioPlaying = false;
    updateAudioUI();
  }
}

function updateAudioUI() {
  const playLabel = document.getElementById("ttsPlayLabel");
  const statusText = document.getElementById("ttsStatusText");
  const waveform = document.getElementById("ttsWaveform");

  if (playLabel) playLabel.textContent = isAudioPlaying ? "Stop Narration" : "Listen Audio Guide";
  if (statusText) statusText.textContent = isAudioPlaying ? `Narrating at ${speechRate}x speed...` : "Ready to narrate chronicle";
  if (waveform) waveform.style.display = isAudioPlaying ? "flex" : "none";
}

// Lightbox Modal
function initLightbox() {
  const banner = document.getElementById("stateSiteBanner");
  const lightboxBtn = document.getElementById("btnOpenLightbox");
  const modal = document.getElementById("stateLightboxModal");
  const closeBtn = document.getElementById("btnCloseLightbox");
  const backdrop = document.getElementById("lightboxBackdrop");
  const lightboxImg = document.getElementById("lightboxFullImg");
  const lightboxCaption = document.getElementById("lightboxCaption");

  function openLightbox() {
    if (!modal || !lightboxImg || carouselImages.length === 0) return;
    const cur = carouselImages[carouselIndex];
    lightboxImg.src = cur.url;
    if (lightboxCaption) lightboxCaption.textContent = cur.caption || "Monument Full View";
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    }
  }

  if (banner) banner.addEventListener("click", openLightbox);
  if (lightboxBtn) lightboxBtn.addEventListener("click", openLightbox);
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.style.display !== "none") {
      closeLightbox();
    }
  });
}

// Web Share
function initShare() {
  const shareBtn = document.getElementById("btnShareMonument");
  if (!shareBtn) return;

  shareBtn.addEventListener("click", async () => {
    const site = stateSites[activeSiteIndex];
    if (!site) return;

    const shareUrl = `${window.location.origin}${window.location.pathname}?site=${site.id}`;
    const shareData = {
      title: `${site.name} - Indian Heritage`,
      text: `Explore ${site.name} in ${site.stateName}. ${site.description.slice(0, 120)}...`,
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') copyLinkToClipboard(shareUrl);
      }
    } else {
      copyLinkToClipboard(shareUrl);
    }
  });
}

function copyLinkToClipboard(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert("🔗 Direct monument link copied to clipboard!");
  });
}

// ==========================================================================
// 360° VIRTUAL PANORAMIC TOUR ENGINE
// ==========================================================================
let currentTourSite = null;
let activeTourScenes = [];
let currentTourSceneIdx = 0;
let tourImg = new Image();
let isTourImgReady = false;

// Camera state
let tourYaw = 0;           // 0° to 360° horizontal heading
let tourPitch = 0;         // -35° to +35° vertical tilt
let tourFov = 1.0;          // 0.7x (zoomed in) to 1.8x (wide angle)
let isTourDragging = false;
let tourDragStartX = 0;
let tourDragStartY = 0;
let tourLastX = 0;
let tourLastY = 0;
let tourVelX = 0;
let tourVelY = 0;
let isTourAutoRotating = true;
let tourAutoRotateResumeTimer = null;
let tourAnimFrameId = null;
let isTourModalOpen = false;

function initVirtualTour() {
  const canvas = document.getElementById("tourCanvas");
  const modalCanvas = document.getElementById("tourModalCanvas");
  const openTourBtn = document.getElementById("btnOpenVirtualTour");
  const overlayTourBtn = document.getElementById("btnTourOverlay");
  const closeTourModalBtn = document.getElementById("btnCloseTourModal");
  const modal = document.getElementById("virtualTourModal");

  // Hook up Canvas Interactions for in-tab canvas
  if (canvas) {
    bindTourCanvasEvents(canvas, false);
  }
  // Hook up Canvas Interactions for fullscreen modal canvas
  if (modalCanvas) {
    bindTourCanvasEvents(modalCanvas, true);
  }

  // Action Bar and Carousel Overlay buttons
  if (openTourBtn) {
    openTourBtn.addEventListener("click", () => {
      openVirtualTourModal();
    });
  }

  if (overlayTourBtn) {
    overlayTourBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openVirtualTourModal();
    });
  }

  // Fullscreen Modal Open / Close
  const fsBtn = document.getElementById("btnTourFullscreen");
  if (fsBtn) {
    fsBtn.addEventListener("click", openVirtualTourModal);
  }
  if (closeTourModalBtn) {
    closeTourModalBtn.addEventListener("click", closeVirtualTourModal);
  }

  // Auto-Rotate Toggle Buttons
  const autoRotateBtn = document.getElementById("btnTourAutoRotate");
  const autoRotateModalBtn = document.getElementById("btnTourModalAutoRotate");
  function toggleAutoRotate() {
    isTourAutoRotating = !isTourAutoRotating;
    if (autoRotateBtn) autoRotateBtn.classList.toggle("active", isTourAutoRotating);
    if (autoRotateModalBtn) autoRotateModalBtn.classList.toggle("active", isTourAutoRotating);
  }
  if (autoRotateBtn) autoRotateBtn.addEventListener("click", toggleAutoRotate);
  if (autoRotateModalBtn) autoRotateModalBtn.addEventListener("click", toggleAutoRotate);

  // Zoom In / Out / Reset
  const zoomInBtn = document.getElementById("btnTourZoomIn");
  const zoomOutBtn = document.getElementById("btnTourZoomOut");
  const resetBtn = document.getElementById("btnTourReset");
  const zoomInModalBtn = document.getElementById("btnTourModalZoomIn");
  const zoomOutModalBtn = document.getElementById("btnTourModalZoomOut");
  const resetModalBtn = document.getElementById("btnTourModalReset");

  function zoomIn() { tourFov = Math.max(0.65, tourFov - 0.15); }
  function zoomOut() { tourFov = Math.min(1.8, tourFov + 0.15); }
  function resetView() { tourPitch = 0; tourFov = 1.0; tourVelX = 0; tourVelY = 0; }

  if (zoomInBtn) zoomInBtn.addEventListener("click", zoomIn);
  if (zoomOutBtn) zoomOutBtn.addEventListener("click", zoomOut);
  if (resetBtn) resetBtn.addEventListener("click", resetView);
  if (zoomInModalBtn) zoomInModalBtn.addEventListener("click", zoomIn);
  if (zoomOutModalBtn) zoomOutModalBtn.addEventListener("click", zoomOut);
  if (resetModalBtn) resetModalBtn.addEventListener("click", resetView);

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (isTourModalOpen) {
      if (e.key === "Escape") closeVirtualTourModal();
      if (e.key === "ArrowLeft") tourYaw = (tourYaw - 5 + 360) % 360;
      if (e.key === "ArrowRight") tourYaw = (tourYaw + 5) % 360;
      if (e.key === "ArrowUp") tourPitch = Math.min(35, tourPitch + 4);
      if (e.key === "ArrowDown") tourPitch = Math.max(-35, tourPitch - 4);
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === " ") { e.preventDefault(); toggleAutoRotate(); }
    }
  });

  // Start Animation Loop
  if (!tourAnimFrameId) {
    animateTourLoop();
  }
}

function bindTourCanvasEvents(canvasEl, isModal) {
  function onPointerDown(clientX, clientY) {
    isTourDragging = true;
    tourLastX = clientX;
    tourLastY = clientY;
    tourVelX = 0;
    tourVelY = 0;
    canvasEl.classList.add("grabbing");
    if (tourAutoRotateResumeTimer) clearTimeout(tourAutoRotateResumeTimer);
  }

  function onPointerMove(clientX, clientY) {
    if (!isTourDragging) return;
    const deltaX = clientX - tourLastX;
    const deltaY = clientY - tourLastY;
    tourLastX = clientX;
    tourLastY = clientY;

    // Adjust yaw & pitch based on drag speed
    const dragSpeed = 0.35 * tourFov;
    tourYaw = (tourYaw - deltaX * dragSpeed + 360) % 360;
    tourPitch = Math.max(-35, Math.min(35, tourPitch + deltaY * dragSpeed * 0.7));

    tourVelX = -deltaX * dragSpeed * 0.4;
    tourVelY = deltaY * dragSpeed * 0.3;
  }

  function onPointerUp() {
    if (!isTourDragging) return;
    isTourDragging = false;
    canvasEl.classList.remove("grabbing");

    // Resume auto-rotate after 2.5s if enabled
    if (isTourAutoRotating) {
      tourAutoRotateResumeTimer = setTimeout(() => {
        // Smoothly resume
      }, 2500);
    }
  }

  // Mouse Events
  canvasEl.addEventListener("mousedown", (e) => onPointerDown(e.clientX, e.clientY));
  window.addEventListener("mousemove", (e) => {
    if (isTourDragging) onPointerMove(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", onPointerUp);

  // Touch Events
  canvasEl.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (isTourDragging && e.touches.length === 1) {
      onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener("touchend", onPointerUp);

  // Mouse Wheel Zoom
  canvasEl.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      tourFov = Math.max(0.65, tourFov - 0.08);
    } else {
      tourFov = Math.min(1.8, tourFov + 0.08);
    }
  }, { passive: false });
}

function loadSiteVirtualTour(site) {
  if (!site) return;
  currentTourSite = site;

  // Build scenes list for this monument
  activeTourScenes = [];

  const mainPano = site.virtualTour?.panoramaUrl || site.imageUrl || (site.images?.[0]?.url) || getMonumentFallbackSvg(site.name);
  activeTourScenes.push({
    title: site.virtualTour?.title || `${site.name} - 360° Main View`,
    icon: "🏛️",
    url: mainPano,
    hotspots: site.virtualTour?.hotspots || generateDefaultHotspots(site)
  });

  // Additional scenes if multiple images exist
  if (site.images && site.images.length > 1) {
    site.images.slice(1, 3).forEach((img, idx) => {
      activeTourScenes.push({
        title: img.caption || `${site.name} - Angle ${idx + 2}`,
        icon: idx === 0 ? "🛕" : "🌄",
        url: img.url,
        hotspots: [
          { x: 35 + idx * 25, y: 45, title: img.caption || "Architectural Perspective", desc: `Detailed viewpoint of ${site.name} architecture and carvings.` }
        ]
      });
    });
  }

  currentTourSceneIdx = 0;

  // Render Scene Switcher Pills
  renderTourScenePills();

  // Update Street View Link
  const streetViewBtn = document.getElementById("tourStreetViewLink");
  const streetViewModalBtn = document.getElementById("tourModalStreetViewLink");
  const svUrl = site.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + " " + site.stateName)}`;
  if (streetViewBtn) streetViewBtn.href = svUrl;
  if (streetViewModalBtn) streetViewModalBtn.href = svUrl;

  // Update Title
  const titleDisplay = document.getElementById("tourSiteTitle");
  const titleModalDisplay = document.getElementById("tourModalSiteTitle");
  if (titleDisplay) titleDisplay.textContent = site.name;
  if (titleModalDisplay) titleModalDisplay.textContent = site.name;

  // Switch to first scene
  switchTourScene(0);
}

function generateDefaultHotspots(site) {
  return [
    { x: 28, y: 42, title: "Principal Sanctum / Facade", desc: `The primary architectural centerpiece and sacred sanctum of ${site.name}.` },
    { x: 68, y: 50, title: "Outer Prakaram & Pillars", desc: `Exquisite stone carvings, columns, and heritage artwork characteristic of ${site.architecturalStyle || 'Indian architecture'}.` },
    { x: 50, y: 72, title: "Historical Courtyard", desc: `Ancient gathering grounds constructed in ${site.builtIn || 'classical era'}.` }
  ];
}

function renderTourScenePills() {
  const bar = document.getElementById("tourScenesBar");
  const modalBar = document.getElementById("tourModalScenesBar");
  if (!bar && !modalBar) return;

  const html = activeTourScenes.map((scene, idx) => `
    <button class="tour-scene-pill ${idx === currentTourSceneIdx ? 'active' : ''}" onclick="switchTourScene(${idx})">
      <span>${scene.icon || '📍'}</span>
      <span>${scene.title.replace(currentTourSite?.name || '', '').replace(/^[ -]+/, '') || scene.title}</span>
    </button>
  `).join("");

  if (bar) bar.innerHTML = html;
  if (modalBar) modalBar.innerHTML = html;
}

window.switchTourScene = function(idx) {
  if (idx < 0 || idx >= activeTourScenes.length) return;
  currentTourSceneIdx = idx;
  const scene = activeTourScenes[idx];

  isTourImgReady = false;
  tourImg = new Image();
  tourImg.crossOrigin = "anonymous";
  tourImg.onload = () => {
    isTourImgReady = true;
  };
  tourImg.onerror = () => {
    // Fallback on error
    tourImg.src = getMonumentFallbackSvg(scene.title);
  };
  tourImg.src = scene.url;

  renderTourScenePills();
  renderTourHotspotsDom(scene.hotspots || []);
};

function renderTourHotspotsDom(hotspots) {
  const container = document.getElementById("tourHotspotsLayer");
  const modalContainer = document.getElementById("tourModalHotspotsLayer");

  function createHotspotsHtml() {
    return hotspots.map((spot, idx) => `
      <div class="tour-hotspot-pin" id="hotspot-pin-${idx}" data-x="${spot.x}" data-y="${spot.y}">
        <div class="tour-hotspot-beacon">
          <div class="tour-hotspot-ring"></div>
          <div class="tour-hotspot-core">${idx + 1}</div>
        </div>
        <div class="tour-hotspot-popover">
          <div class="tour-popover-title">${spot.title}</div>
          <p class="tour-popover-desc">${spot.desc}</p>
        </div>
      </div>
    `).join("");
  }

  if (container) container.innerHTML = createHotspotsHtml();
  if (modalContainer) modalContainer.innerHTML = createHotspotsHtml();
}

function animateTourLoop() {
  // Inertia glide
  if (!isTourDragging) {
    if (Math.abs(tourVelX) > 0.01) {
      tourYaw = (tourYaw + tourVelX + 360) % 360;
      tourVelX *= 0.92;
    } else if (isTourAutoRotating) {
      tourYaw = (tourYaw + 0.12) % 360;
    }

    if (Math.abs(tourVelY) > 0.01) {
      tourPitch = Math.max(-35, Math.min(35, tourPitch + tourVelY));
      tourVelY *= 0.90;
    }
  }

  // Render in-tab canvas if visible
  const canvas = document.getElementById("tourCanvas");
  if (canvas && canvas.offsetParent !== null) {
    drawPanoramaToCanvas(canvas, false);
  }

  // Render modal canvas if modal is open
  if (isTourModalOpen) {
    const modalCanvas = document.getElementById("tourModalCanvas");
    if (modalCanvas) {
      drawPanoramaToCanvas(modalCanvas, true);
    }
  }

  // Update Compass
  updateCompassUI();

  tourAnimFrameId = requestAnimationFrame(animateTourLoop);
}

function drawPanoramaToCanvas(canvasEl, isModal) {
  if (!canvasEl) return;
  const ctx = canvasEl.getContext("2d");
  const width = isModal ? window.innerWidth : (canvasEl.clientWidth || canvasEl.parentElement?.clientWidth || 800);
  const height = isModal ? window.innerHeight : (canvasEl.clientHeight || canvasEl.parentElement?.clientHeight || 520);

  if (canvasEl.width !== width || canvasEl.height !== height) {
    canvasEl.width = width;
    canvasEl.height = height;
  }

  ctx.clearRect(0, 0, width, height);

  if (!isTourImgReady || !tourImg.width || !tourImg.height) {
    // Elegant loading background
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#020617");
    grad.addColorStop(1, "#0f172a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#fbbf24";
    ctx.font = "600 16px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Loading 360° Panoramic High-Resolution Vista...", width / 2, height / 2);
    return;
  }

  // 360 Continuous Cylindrical Projection
  const imgW = tourImg.width;
  const imgH = tourImg.height;

  // Viewport slice width based on FOV
  const fovSpanDeg = 90 * tourFov;
  const srcSliceW = (fovSpanDeg / 360) * imgW;
  const srcCenterNormX = tourYaw / 360;
  const srcStartX = (srcCenterNormX * imgW) - (srcSliceW / 2);

  // Vertical tilt offset
  const pitchRatio = (tourPitch / 40);
  const srcSliceH = imgH / tourFov;
  const rawStartY = ((imgH - srcSliceH) / 2) - (pitchRatio * (imgH - srcSliceH) * 0.4);
  const srcStartY = Math.max(0, Math.min(imgH - 10, rawStartY));
  const safeSliceH = Math.min(imgH - srcStartY, srcSliceH);

  // Draw 2 slices for seamless 360 wrap-around
  const normalizedStartX = ((srcStartX % imgW) + imgW) % imgW;

  if (normalizedStartX + srcSliceW <= imgW) {
    // Single clean slice
    ctx.drawImage(tourImg, normalizedStartX, srcStartY, srcSliceW, safeSliceH, 0, 0, width, height);
  } else {
    // Split wrap slice
    const firstPartW = imgW - normalizedStartX;
    const firstDestW = (firstPartW / srcSliceW) * width;
    ctx.drawImage(tourImg, normalizedStartX, srcStartY, firstPartW, safeSliceH, 0, 0, firstDestW, height);

    const secondPartW = srcSliceW - firstPartW;
    const secondDestW = width - firstDestW;
    ctx.drawImage(tourImg, 0, srcStartY, secondPartW, safeSliceH, firstDestW, 0, secondDestW, height);
  }

  // Project Hotspots onto screen
  updateHotspotsProjection(isModal ? "tourModalHotspotsLayer" : "tourHotspotsLayer", width, height, fovSpanDeg);
}

function updateHotspotsProjection(layerId, canvasW, canvasH, fovSpanDeg) {
  const layer = document.getElementById(layerId);
  if (!layer) return;

  const pins = layer.querySelectorAll(".tour-hotspot-pin");
  pins.forEach(pin => {
    const spotYaw = (parseFloat(pin.getAttribute("data-x")) / 100) * 360;
    const spotPitch = (parseFloat(pin.getAttribute("data-y")) / 100) * 80 - 40;

    // Relative yaw angle normalized to (-180° to 180°)
    let deltaYaw = (spotYaw - tourYaw + 540) % 360 - 180;

    const halfFov = fovSpanDeg / 2;
    if (Math.abs(deltaYaw) <= halfFov * 1.1) {
      // Inside visible field of view
      const screenX = (canvasW / 2) + (deltaYaw / halfFov) * (canvasW / 2);
      const deltaPitch = spotPitch - tourPitch;
      const screenY = (canvasH / 2) - (deltaPitch / 35) * (canvasH / 2);

      pin.style.left = `${screenX}px`;
      pin.style.top = `${screenY}px`;
      pin.style.opacity = "1";
      pin.style.pointerEvents = "auto";
    } else {
      // Off-screen
      pin.style.opacity = "0";
      pin.style.pointerEvents = "none";
    }
  });
}

function updateCompassUI() {
  const needle = document.getElementById("tourCompassNeedle");
  const text = document.getElementById("tourCompassText");
  const modalNeedle = document.getElementById("tourModalCompassNeedle");
  const modalText = document.getElementById("tourModalCompassText");

  const heading = Math.round(tourYaw);
  const formattedAngle = String(heading).padStart(3, '0');

  let cardinal = "N";
  if (heading >= 23 && heading < 68) cardinal = "NE";
  else if (heading >= 68 && heading < 113) cardinal = "E";
  else if (heading >= 113 && heading < 158) cardinal = "SE";
  else if (heading >= 158 && heading < 203) cardinal = "S";
  else if (heading >= 203 && heading < 248) cardinal = "SW";
  else if (heading >= 248 && heading < 293) cardinal = "W";
  else if (heading >= 293 && heading < 338) cardinal = "NW";

  const compassStr = `${cardinal} ${formattedAngle}°`;

  if (needle) needle.style.transform = `rotate(${-heading}deg)`;
  if (text) text.textContent = compassStr;
  if (modalNeedle) modalNeedle.style.transform = `rotate(${-heading}deg)`;
  if (modalText) modalText.textContent = compassStr;
}

function switchToTourTab() {
  const tourTabBtn = document.querySelector(`.state-tab-btn[data-tab="tour"]`);
  if (tourTabBtn) {
    tourTabBtn.click();
    tourTabBtn.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    openVirtualTourModal();
  }
}

function openVirtualTourModal() {
  const modal = document.getElementById("virtualTourModal");
  const modalCanvas = document.getElementById("tourModalCanvas");
  if (modal) {
    modal.classList.add("active");
    isTourModalOpen = true;
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";

    if (modalCanvas) {
      modalCanvas.width = window.innerWidth;
      modalCanvas.height = window.innerHeight;
    }

    try {
      if (!document.fullscreenElement) {
        if (modal.requestFullscreen) modal.requestFullscreen().catch(() => {});
        else if (modal.webkitRequestFullscreen) modal.webkitRequestFullscreen();
        else if (modal.msRequestFullscreen) modal.msRequestFullscreen();
      }
    } catch (e) {}
  }
}

function closeVirtualTourModal() {
  const modal = document.getElementById("virtualTourModal");
  if (modal) {
    modal.classList.remove("active");
    isTourModalOpen = false;
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";

    try {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
      }
    } catch (e) {}
  }
}

window.addEventListener("resize", () => {
  const modalCanvas = document.getElementById("tourModalCanvas");
  if (modalCanvas && isTourModalOpen) {
    modalCanvas.width = window.innerWidth;
    modalCanvas.height = window.innerHeight;
  }
  const canvas = document.getElementById("tourCanvas");
  if (canvas) {
    canvas.width = canvas.clientWidth || 800;
    canvas.height = canvas.clientHeight || 520;
  }
});

window.openVirtualTourModal = openVirtualTourModal;
window.closeVirtualTourModal = closeVirtualTourModal;
window.switchToTourTab = switchToTourTab;
window.initStatePage = initStatePage;
