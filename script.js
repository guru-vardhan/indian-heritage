/**
 * Indian Heritage & Culture - Interactive Portal Controller
 * Features:
 * 1. SVG Map of India (36 States & UTs) & Dynamic Selectors
 * 2. Live Search & Multi-Category Filter Engine
 * 3. Web Speech API (window.speechSynthesis) Audio Guide Player
 * 4. Multi-Image Carousel & Lightbox
 * 5. Interactive 360° Canvas Virtual Tour Panorama Viewer
 * 6. Firebase Firestore Dynamic Realtime Synchronization
 */

// Application State
const appState = {
  currentStateId: "AndhraPradesh",
  currentSiteId: "tirupati-temple",
  currentSiteObj: null,
  currentSitesList: [],
  activeFilter: "all",
  searchQuery: "",
  carouselIndex: 0,
  carouselImages: [],
  isTourMode: false,
  isSpeaking: false,
  isPaused: false,
  availableVoices: []
};

// DOM References
const dom = {
  // Theme & DB
  dbStatusText: document.getElementById("dbStatusText"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),

  // Search & Filter
  liveSearchInput: document.getElementById("liveSearchInput"),
  searchScopeSelect: document.getElementById("searchScopeSelect"),
  searchSubmitBtn: document.getElementById("searchSubmitBtn"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  filterPillsRow: document.getElementById("filterPillsRow"),
  searchResultsFlyout: document.getElementById("searchResultsFlyout"),
  searchResultsList: document.getElementById("searchResultsList"),
  resultsCountText: document.getElementById("resultsCountText"),
  closeFlyoutBtn: document.getElementById("closeFlyoutBtn"),

  // Map & Controls
  mapContainer: document.getElementById("mapContainer"),
  mapTooltip: document.getElementById("map-tooltip") || document.getElementById("mapTooltip"),
  statePaths: document.querySelectorAll(".state-path"),
  stateChips: document.querySelectorAll(".state-chip"),

  // Selectors
  stateSelect: document.getElementById("state-select"),
  siteSelect: document.getElementById("site-select"),
  siteCountBadge: document.getElementById("siteCountBadge"),

  // Site Details (#site-details)
  siteDetailsCard: document.getElementById("site-details"),
  siteName: document.getElementById("site-name"),
  siteDesc: document.getElementById("site-desc"),
  siteCategory: document.getElementById("site-category"),
  siteUnescoBadge: document.getElementById("site-unesco-badge"),
  siteStateDistrict: document.getElementById("site-state-district"),
  siteRating: document.getElementById("site-rating"),
  siteBuilt: document.getElementById("site-built"),
  siteArchitecture: document.getElementById("site-architecture"),
  siteBestTime: document.getElementById("site-best-time"),
  siteSignificance: document.getElementById("site-significance"),
  siteFestival: document.getElementById("site-festival"),
  festTitle: document.getElementById("festTitle"),
  festDesc: document.getElementById("festDesc"),
  siteMap: document.getElementById("site-map"),
  siteWiki: document.getElementById("site-wiki"),
  shareSiteBtn: document.getElementById("shareSiteBtn"),

  // Media Showcase & Carousel
  tabGalleryMode: document.getElementById("tabGalleryMode"),
  tabTourMode: document.getElementById("tabTourMode"),
  carouselViewContainer: document.getElementById("carouselViewContainer"),
  tourViewContainer: document.getElementById("tourViewContainer"),
  galleryCountBadge: document.getElementById("galleryCountBadge"),
  siteBanner: document.getElementById("site-banner"),
  carouselCaption: document.getElementById("carouselCaption"),
  prevSlideBtn: document.getElementById("prevSlideBtn"),
  nextSlideBtn: document.getElementById("nextSlideBtn"),
  carouselDots: document.getElementById("carouselDots"),
  carouselThumbs: document.getElementById("carouselThumbs"),
  fullscreenMediaBtn: document.getElementById("fullscreenMediaBtn"),

  // 360° Virtual Tour
  panoramaCanvas: document.getElementById("panoramaCanvas"),
  tourTitleText: document.getElementById("tourTitleText"),
  tourAutoRotateBtn: document.getElementById("tourAutoRotateBtn"),
  tourZoomInBtn: document.getElementById("tourZoomInBtn"),
  tourZoomOutBtn: document.getElementById("tourZoomOutBtn"),
  tourResetBtn: document.getElementById("tourResetBtn"),
  tourCompass: document.getElementById("tourCompass"),
  tourHotspotPopover: document.getElementById("tourHotspotPopover"),
  hotspotTitle: document.getElementById("hotspotTitle"),
  hotspotDesc: document.getElementById("hotspotDesc"),

  // Audio Guide (Speech Synthesis)
  audioGuidePlayer: document.getElementById("audioGuidePlayer"),
  ttsPlayBtn: document.getElementById("ttsPlayBtn"),
  ttsPlayIcon: document.getElementById("ttsPlayIcon"),
  ttsPlayLabel: document.getElementById("ttsPlayLabel"),
  ttsPauseBtn: document.getElementById("ttsPauseBtn"),
  ttsStopBtn: document.getElementById("ttsStopBtn"),
  ttsStatusText: document.getElementById("ttsStatusText"),
  ttsRateSelect: document.getElementById("ttsRateSelect"),
  ttsVoiceSelect: document.getElementById("ttsVoiceSelect"),
  ttsWaveform: document.getElementById("ttsWaveform"),

  // Lightbox Modal
  mediaLightboxModal: document.getElementById("mediaLightboxModal"),
  lightboxBackdrop: document.getElementById("lightboxBackdrop"),
  closeLightboxBtn: document.getElementById("closeLightboxBtn"),
  lightboxImg: document.getElementById("lightboxImg"),
  lightboxCaption: document.getElementById("lightboxCaption"),
  lightboxPrevBtn: document.getElementById("lightboxPrevBtn"),
  lightboxNextBtn: document.getElementById("lightboxNextBtn")
};

// -------------------------------------------------------------
// Core Data Helpers & Lookup Utilities
// -------------------------------------------------------------
const STATE_CODE_MAP = {
  "ap": "AndhraPradesh",
  "ts": "Telangana",
  "tg": "Telangana",
  "tn": "TamilNadu",
  "ka": "Karnataka",
  "mh": "Maharashtra",
  "rj": "Rajasthan",
  "up": "UttarPradesh",
  "mp": "MadhyaPradesh",
  "gj": "Gujarat",
  "od": "Odisha",
  "or": "Odisha",
  "kl": "Kerala",
  "wb": "WestBengal",
  "br": "Bihar",
  "pb": "Punjab",
  "dl": "Delhi",
  "ga": "Goa",
  "as": "Assam",
  "jk": "JammuAndKashmir",
  "la": "Ladakh",
  "hp": "HimachalPradesh",
  "uk": "Uttarakhand",
  "ut": "Uttarakhand",
  "cg": "Chhattisgarh",
  "ct": "Chhattisgarh",
  "jh": "Jharkhand",
  "hr": "Haryana",
  "sk": "Sikkim",
  "ar": "ArunachalPradesh",
  "ml": "Meghalaya",
  "nl": "Nagaland",
  "mn": "Manipur",
  "mz": "Mizoram",
  "tr": "Tripura",
  "py": "Puducherry",
  "ch": "Chandigarh",
  "an": "AndamanAndNicobar",
  "dn": "DadraAndNagarHaveli",
  "dd": "DadraAndNagarHaveli",
  "ld": "Lakshadweep"
};

function getStateById(stateId) {
  if (!stateId || typeof STATES_DATA === "undefined") return null;
  let clean = stateId.toString().replace(/[\s\-_]/g, "").toLowerCase();
  if (STATE_CODE_MAP[clean]) {
    clean = STATE_CODE_MAP[clean].toLowerCase();
  }
  return STATES_DATA.find(s => 
    s.id.toLowerCase() === clean || 
    s.id.replace(/[\s\-_]/g, "").toLowerCase() === clean || 
    s.name.replace(/[\s\-_]/g, "").toLowerCase() === clean ||
    s.name.toLowerCase() === stateId.toString().toLowerCase()
  ) || null;
}
window.getStateById = getStateById;

function getSitesByState(stateId) {
  if (!stateId || typeof HERITAGE_SITES === "undefined") return [];
  const clean = stateId.toString().replace(/[\s\-_]/g, "").toLowerCase();
  return HERITAGE_SITES.filter(s => 
    s.stateId.toLowerCase() === clean ||
    s.stateId.replace(/[\s\-_]/g, "").toLowerCase() === clean
  );
}
window.getSitesByState = getSitesByState;

function getSiteById(siteId) {
  if (!siteId || typeof HERITAGE_SITES === "undefined") return null;
  return HERITAGE_SITES.find(s => s.id.toLowerCase() === siteId.toLowerCase()) || null;
}
window.getSiteById = getSiteById;

function searchHeritageSites(query, filterOpts = {}) {
  if (typeof HERITAGE_SITES === "undefined") return [];
  let sites = HERITAGE_SITES;

  if (filterOpts.unescoOnly) {
    sites = sites.filter(s => s.isUnesco);
  }
  if (filterOpts.category && filterOpts.category !== "all") {
    sites = sites.filter(s => (s.category || "").toLowerCase() === filterOpts.category.toLowerCase());
  }
  if (filterOpts.region && filterOpts.region !== "all") {
    const reg = filterOpts.region.toLowerCase();
    sites = sites.filter(s => {
      const stateObj = getStateById(s.stateId);
      return stateObj && stateObj.region.toLowerCase().includes(reg);
    });
  }

  if (!query || !query.trim()) return sites;

  const q = query.toLowerCase().trim();
  return sites.filter(s => {
    return (
      s.name.toLowerCase().includes(q) ||
      (s.stateName && s.stateName.toLowerCase().includes(q)) ||
      (s.district && s.district.toLowerCase().includes(q)) ||
      (s.description && s.description.toLowerCase().includes(q)) ||
      (s.architecturalStyle && s.architecturalStyle.toLowerCase().includes(q)) ||
      (s.tags && s.tags.some(t => t.toLowerCase().includes(q)))
    );
  });
}
window.searchHeritageSites = searchHeritageSites;

// -------------------------------------------------------------
// Multi-Tier Image Fallback Handler (SVG Banners & Icon Badges)
// -------------------------------------------------------------
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
    <circle cx="400" cy="210" r="85" fill="#fef3c7" fill-opacity="0.15" stroke="#f59e0b" stroke-width="2"/>
    <text x="50%" y="225" dominant-baseline="middle" text-anchor="middle" font-size="64">🏛️</text>
    <text x="50%" y="340" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#f8fafc">${safeTitle}</text>
    <text x="50%" y="375" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" fill="#f59e0b" letter-spacing="2">ARCHAEOLOGICAL ARCHIVE</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function handleImageError(imgElement) {
  if (!imgElement) return;
  imgElement.onerror = null; // Prevent infinite error loops

  const isBanner = imgElement.id === "site-banner" || 
                   imgElement.id === "lightboxImg" || 
                   imgElement.classList.contains("site-banner-img") ||
                   (imgElement.offsetWidth > 150);

  if (isBanner) {
    imgElement.src = getMonumentFallbackSvg(imgElement.alt || "Indian Cultural Heritage");
    return;
  }

  // Thumbnail fallback handling
  const wrapper = imgElement.parentElement;
  let icon = "🏛️";
  const altLower = (imgElement.alt || "").toLowerCase();
  if (altLower.includes("temple") || altLower.includes("mandir") || altLower.includes("devalaya")) icon = "🛕";
  else if (altLower.includes("fort") || altLower.includes("palace") || altLower.includes("mahal")) icon = "🏰";
  else if (altLower.includes("cave") || altLower.includes("sculpture") || altLower.includes("rock")) icon = "🗿";
  else if (altLower.includes("mosque") || altLower.includes("tomb") || altLower.includes("dargah")) icon = "🕌";
  else if (altLower.includes("sun") || altLower.includes("chariot")) icon = "☀️";
  else if (imgElement.alt) icon = imgElement.alt.trim().charAt(0).toUpperCase();

  if (wrapper && (wrapper.classList.contains("site-thumb-wrapper") || wrapper.classList.contains("result-thumb-wrapper"))) {
    wrapper.innerHTML = `<div class="site-thumb-fallback">${icon}</div>`;
  } else if (wrapper) {
    const fallback = document.createElement("div");
    fallback.className = "site-thumb-fallback";
    fallback.style.width = (imgElement.offsetWidth || 52) + "px";
    fallback.style.height = (imgElement.offsetHeight || 52) + "px";
    fallback.style.borderRadius = "8px";
    fallback.textContent = icon;
    imgElement.replaceWith(fallback);
  } else {
    imgElement.src = getMonumentFallbackSvg(imgElement.alt);
  }
}
window.handleImageError = handleImageError;
window.getMonumentFallbackSvg = getMonumentFallbackSvg;

// -------------------------------------------------------------
// 1. Initialization
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMapInteractions();
  initDropdownListeners();
  initLiveSearchAndFilters();
  initFeaturedSlider();
  initStatesDirectory();
  initAudioGuide();
  initMediaShowcase();
  initPanoramaViewer();
  initFirebaseStatusIndicator();

  // Initial load with Andhra Pradesh
  selectState("AndhraPradesh");
});

// -------------------------------------------------------------
// 2. State & Site Selection
// -------------------------------------------------------------
async function selectState(stateId, autoSelectSiteId = null) {
  if (!stateId) return;

  // Normalize state ID
  const matchedState = getStateById(stateId);
  const normalizedId = matchedState ? matchedState.id : stateId.replace(/[\s\-_]/g, '');
  appState.currentStateId = normalizedId;
  const stateName = matchedState ? matchedState.name : normalizedId;
  const slug = stateName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  // Sync Dropdowns
  if (dom.stateSelect) {
    dom.stateSelect.value = normalizedId;
  }
  const dashboardPicker = document.getElementById("dashboard-state-picker");
  if (dashboardPicker) {
    dashboardPicker.value = normalizedId;
  }

  // Sync Map Highlight
  updateMapHighlight(normalizedId);

  // Sync Quick Chips
  updateQuickChips(normalizedId);

  // Sync Dashboard Quick State Pills
  const dashboardPills = document.querySelectorAll("#dashboardQuickPills .dashboard-state-pill-btn");
  dashboardPills.forEach(p => {
    if ((p.getAttribute("data-state") || "").toLowerCase() === normalizedId.toLowerCase()) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  // Stop any currently playing audio guide when state changes
  stopAudioGuide();

  // Fetch sites for selected state
  const sites = await fetchHeritageSites(normalizedId);
  appState.currentSitesList = sites;

  // Update Live Dashboard Spotlight Card
  const spotlightIcon = document.getElementById("spotlight-state-icon");
  const spotlightName = document.getElementById("spotlight-state-name");
  const spotlightCapital = document.getElementById("spotlight-state-capital");
  const spotlightRegion = document.getElementById("spotlight-state-region");
  const spotlightCount = document.getElementById("spotlight-site-count-badge");
  const spotlightDesc = document.getElementById("spotlight-state-desc");
  const spotlightPreview = document.getElementById("spotlight-monuments-preview");
  const spotlightBtn = document.getElementById("spotlight-state-portal-btn");
  const spotlightBtnLabel = document.getElementById("spotlight-btn-label");

  if (spotlightIcon && matchedState) spotlightIcon.textContent = matchedState.icon || "🏛️";
  if (spotlightName) spotlightName.textContent = stateName;
  if (spotlightCapital) spotlightCapital.textContent = `Capital: ${matchedState ? matchedState.capital : 'State Capital'}`;
  if (spotlightRegion) spotlightRegion.textContent = matchedState ? matchedState.region : 'India';
  if (spotlightCount) spotlightCount.textContent = `${sites.length} Cataloged Site${sites.length === 1 ? '' : 's'}`;

  if (spotlightDesc) {
    if (sites.length > 0) {
      spotlightDesc.textContent = `Featuring ${sites.map(s => s.name).slice(0, 2).join(", ")}. Explore audio guide, architecture & 360° tours.`;
    } else {
      spotlightDesc.textContent = `Explore cultural landmarks, indigenous traditions & architectures of ${stateName}.`;
    }
  }

  if (spotlightPreview) {
    if (sites.length > 0) {
      spotlightPreview.innerHTML = sites.slice(0, 3).map(site => `
        <a href="states/${slug}.html?site=${site.id}" style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-card); padding: 0.35rem 0.6rem; border-radius: 6px; border: 1px solid var(--border); font-size: 0.76rem; text-decoration: none; color: inherit; transition: all 0.2s ease; cursor: pointer;" onmouseover="this.style.borderColor='var(--primary-saffron)'; this.style.transform='translateX(2px)'" onmouseout="this.style.borderColor='var(--border)'; this.style.transform='none'">
          <div style="font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 0.35rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            <span>${site.isUnesco ? '🏛️' : '📍'}</span>
            <span style="overflow: hidden; text-overflow: ellipsis;">${site.name}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.35rem; flex-shrink: 0;">
            <span style="font-size: 0.65rem; color: var(--primary-saffron); font-weight: 700; background: rgba(245, 158, 11, 0.1); padding: 0.1rem 0.35rem; border-radius: 4px;">${site.category || 'Site'}</span>
            <span style="font-size: 0.7rem; color: var(--text-muted);">➔</span>
          </div>
        </a>
      `).join("");
      if (sites.length > 3) {
        spotlightPreview.innerHTML += `
          <div style="font-size: 0.68rem; color: var(--text-muted); text-align: right; padding-top: 0.1rem;">
            + ${sites.length - 3} more sites on state page
          </div>
        `;
      }
    } else {
      spotlightPreview.innerHTML = `
        <div style="background: var(--bg-card); padding: 0.4rem 0.65rem; border-radius: 6px; border: 1px solid var(--border); font-size: 0.74rem; color: var(--text-muted);">
          📍 Regional catalog available on state portal.
        </div>
      `;
    }
  }

  const spotlightOfficialBtn = document.getElementById("spotlight-official-tourism-btn");
  const spotlightOfficialLabel = document.getElementById("spotlight-official-label");

  if (spotlightBtn) {
    spotlightBtn.href = `states/${slug}.html`;
  }
  if (spotlightBtnLabel) {
    spotlightBtnLabel.textContent = `Open ${stateName} Heritage Portal`;
  }

  if (spotlightOfficialBtn) {
    const tourismUrl = (matchedState && matchedState.tourismUrl) ? matchedState.tourismUrl : `https://www.google.com/search?q=${encodeURIComponent(stateName + " official tourism board website")}`;
    spotlightOfficialBtn.href = tourismUrl;
  }
  if (spotlightOfficialLabel) {
    spotlightOfficialLabel.textContent = `Official ${stateName} Tourism Website`;
  }

  // Populate Dynamic Site Dropdown
  populateSiteDropdown(sites);

  // If classic site details container exists, update it too
  if (dom.siteDetailsCard) {
    if (autoSelectSiteId) {
      const target = sites.find(s => s.id === autoSelectSiteId) || getSiteById(autoSelectSiteId);
      if (target) {
        if (dom.siteSelect) dom.siteSelect.value = target.id;
        displaySiteDetails(target);
        return;
      }
    }
    if (sites.length > 0) {
      displaySiteDetails(sites[0]);
    }
  }
}

function populateSiteDropdown(sites) {
  if (!dom.siteSelect) return;
  dom.siteSelect.innerHTML = "";

  if (!sites || sites.length === 0) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "No sites registered for this state";
    dom.siteSelect.appendChild(opt);
    return;
  }

  sites.forEach((site, index) => {
    const opt = document.createElement("option");
    opt.value = site.id;
    opt.textContent = `${site.isUnesco ? '🏛️ ' : '📍 '} ${site.name}`;
    if (index === 0) {
      opt.selected = true;
    }
    dom.siteSelect.appendChild(opt);
  });
}

// -------------------------------------------------------------
// 3. Site Details & Media Showcase Renderer
// -------------------------------------------------------------
function displaySiteDetails(site) {
  if (!site) return;
  appState.currentSiteId = site.id;
  appState.currentSiteObj = site;

  // Stop previous speech
  stopAudioGuide();

  // Card Fade Transition Effect
  dom.siteDetailsCard.style.opacity = "0.3";
  dom.siteDetailsCard.style.transform = "translateY(6px)";

  setTimeout(() => {
    // 1. Mandatory Boilerplate Text & Specs
    dom.siteName.textContent = site.name;
    dom.siteDesc.textContent = site.description;

    // Festival Info
    if (site.festival) {
      dom.festTitle.textContent = `Festival: ${site.festival.name} (${site.festival.period})`;
      dom.festDesc.textContent = site.festival.description;
    } else {
      dom.festTitle.textContent = "Festival: Local Temple & Cultural Celebrations";
      dom.festDesc.textContent = "Annual rituals, classical concerts, and traditional fairs.";
    }

    // Google Maps Link & Wikipedia Article Link
    dom.siteMap.href = site.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name)}`;
    if (dom.siteWiki) {
      dom.siteWiki.href = site.wikiUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(site.name)}`;
    }

    // Badges & Meta
    if (dom.siteCategory) dom.siteCategory.textContent = site.category || "Ancient Monument";
    if (dom.siteUnescoBadge) dom.siteUnescoBadge.style.display = site.isUnesco ? "inline-block" : "none";
    if (dom.siteStateDistrict) dom.siteStateDistrict.textContent = `📍 ${site.district || site.stateName}, ${site.stateName}`;
    if (dom.siteRating) dom.siteRating.textContent = `⭐ ${site.rating || '4.8'} (${site.isUnesco ? 'UNESCO World Heritage' : 'State Protected Monument'})`;
    if (dom.siteBuilt) dom.siteBuilt.textContent = site.builtIn || "Ancient Historical Era";
    if (dom.siteArchitecture) dom.siteArchitecture.textContent = site.architecturalStyle || "Indian Traditional Stone Architecture";
    if (dom.siteBestTime) dom.siteBestTime.textContent = site.bestTime || "October to March";
    if (dom.siteSignificance) dom.siteSignificance.textContent = site.culturalSignificance || "Major Cultural & Spiritual Heritage Hub";

    // 2. Setup Multi-Image Carousel
    setupCarouselForSite(site);

    // 3. Setup 360° Virtual Tour Panorama
    setupPanoramaForSite(site);

    // 4. Update Audio Guide Status
    if (dom.ttsStatusText) {
      dom.ttsStatusText.textContent = `Ready to narrate ${site.name}`;
    }

    // Reset Animation
    dom.siteDetailsCard.style.opacity = "1";
    dom.siteDetailsCard.style.transform = "translateY(0)";
  }, 120);
}

// -------------------------------------------------------------
// 4. Multi-Image Carousel & Lightbox Logic
// -------------------------------------------------------------
function initMediaShowcase() {
  // Mode Switch Tabs
  if (dom.tabGalleryMode && dom.tabTourMode) {
    dom.tabGalleryMode.addEventListener("click", () => switchMediaMode(false));
    dom.tabTourMode.addEventListener("click", () => switchMediaMode(true));
  }

  // Carousel Navigation Arrows
  if (dom.prevSlideBtn) dom.prevSlideBtn.addEventListener("click", () => prevCarouselSlide());
  if (dom.nextSlideBtn) dom.nextSlideBtn.addEventListener("click", () => nextCarouselSlide());

  // Fullscreen Lightbox
  if (dom.fullscreenMediaBtn) {
    dom.fullscreenMediaBtn.addEventListener("click", openLightboxModal);
  }
  if (dom.closeLightboxBtn) dom.closeLightboxBtn.addEventListener("click", closeLightboxModal);
  if (dom.lightboxBackdrop) dom.lightboxBackdrop.addEventListener("click", closeLightboxModal);
  if (dom.lightboxPrevBtn) dom.lightboxPrevBtn.addEventListener("click", prevCarouselSlide);
  if (dom.lightboxNextBtn) dom.lightboxNextBtn.addEventListener("click", nextCarouselSlide);

  // Keyboard navigation for Lightbox
  document.addEventListener("keydown", (e) => {
    if (dom.mediaLightboxModal && dom.mediaLightboxModal.style.display !== "none") {
      if (e.key === "Escape") closeLightboxModal();
      if (e.key === "ArrowLeft") prevCarouselSlide();
      if (e.key === "ArrowRight") nextCarouselSlide();
    }
  });
}

function switchMediaMode(isTour) {
  appState.isTourMode = isTour;
  if (isTour) {
    dom.tabTourMode.classList.add("active");
    dom.tabGalleryMode.classList.remove("active");
    dom.tourViewContainer.style.display = "block";
    dom.carouselViewContainer.style.display = "none";
    resizePanoramaCanvas();
  } else {
    dom.tabGalleryMode.classList.add("active");
    dom.tabTourMode.classList.remove("active");
    dom.carouselViewContainer.style.display = "block";
    dom.tourViewContainer.style.display = "none";
  }
}

function setupCarouselForSite(site) {
  // Prepare images array
  let images = site.images && site.images.length > 0 
    ? site.images 
    : [{ url: site.imageUrl, caption: site.name }];

  appState.carouselImages = images;
  appState.carouselIndex = 0;

  if (dom.galleryCountBadge) {
    dom.galleryCountBadge.textContent = `(${images.length})`;
  }

  // Render Dots
  if (dom.carouselDots) {
    dom.carouselDots.innerHTML = "";
    images.forEach((_, idx) => {
      const dot = document.createElement("span");
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener("click", () => goToCarouselSlide(idx));
      dom.carouselDots.appendChild(dot);
    });
  }

  // Render Mini Thumbnails Strip
  if (dom.carouselThumbs) {
    dom.carouselThumbs.innerHTML = "";
    images.forEach((img, idx) => {
      const thumb = document.createElement("img");
      thumb.className = `carousel-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.src = img.url;
      thumb.alt = img.caption || site.name;
      thumb.onerror = function() { handleImageError(this); };
      thumb.addEventListener("click", () => goToCarouselSlide(idx));
      dom.carouselThumbs.appendChild(thumb);
    });
  }

  // Display initial slide
  updateCarouselView();
}

function goToCarouselSlide(index) {
  if (index < 0 || index >= appState.carouselImages.length) return;
  appState.carouselIndex = index;
  updateCarouselView();
}

function nextCarouselSlide() {
  const total = appState.carouselImages.length;
  if (total === 0) return;
  appState.carouselIndex = (appState.carouselIndex + 1) % total;
  updateCarouselView();
}

function prevCarouselSlide() {
  const total = appState.carouselImages.length;
  if (total === 0) return;
  appState.carouselIndex = (appState.carouselIndex - 1 + total) % total;
  updateCarouselView();
}

function updateCarouselView() {
  const imgObj = appState.carouselImages[appState.carouselIndex];
  if (!imgObj) return;

  if (dom.siteBanner) {
    dom.siteBanner.style.opacity = "0.5";
    setTimeout(() => {
      dom.siteBanner.src = imgObj.url;
      dom.siteBanner.alt = imgObj.caption || "Heritage Site";
      dom.siteBanner.style.opacity = "1";
    }, 80);
  }

  if (dom.carouselCaption) {
    dom.carouselCaption.querySelector("span").textContent = imgObj.caption || appState.currentSiteObj?.name;
  }

  // Update dots
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === appState.carouselIndex);
  });

  // Update thumbnails
  const thumbs = document.querySelectorAll(".carousel-thumb");
  thumbs.forEach((th, idx) => {
    th.classList.toggle("active", idx === appState.carouselIndex);
  });

  // Update Lightbox if open
  if (dom.mediaLightboxModal && dom.mediaLightboxModal.style.display !== "none") {
    if (dom.lightboxImg) dom.lightboxImg.src = imgObj.url;
    if (dom.lightboxCaption) dom.lightboxCaption.textContent = imgObj.caption || "";
  }
}

function openLightboxModal() {
  const imgObj = appState.carouselImages[appState.carouselIndex];
  if (!imgObj) return;

  dom.lightboxImg.src = imgObj.url;
  dom.lightboxCaption.textContent = imgObj.caption || appState.currentSiteObj?.name || "Heritage Monument";
  dom.mediaLightboxModal.style.display = "flex";
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
}

function closeLightboxModal() {
  dom.mediaLightboxModal.style.display = "none";
  document.body.classList.remove("modal-open");
  document.body.style.overflow = "";
}

// -------------------------------------------------------------
// 5. 360° Interactive Canvas Virtual Tour Panorama Viewer
// -------------------------------------------------------------
const panorama = {
  canvas: null,
  ctx: null,
  image: new Image(),
  isLoaded: false,
  isDragging: false,
  lastMouseX: 0,
  lastMouseY: 0,
  yaw: 0,        // Horizontal rotation in degrees (0 to 360)
  pitch: 0,      // Vertical tilt in degrees (-45 to 45)
  fov: 70,       // Field of view in degrees (35 to 90)
  autoRotate: true,
  autoRotateSpeed: 0.25,
  hotspots: [],
  animFrameId: null
};

function initPanoramaViewer() {
  panorama.canvas = dom.panoramaCanvas;
  if (!panorama.canvas) return;
  panorama.ctx = panorama.canvas.getContext("2d");

  // Mouse & Touch Drag Controls
  panorama.canvas.addEventListener("mousedown", (e) => {
    panorama.isDragging = true;
    panorama.lastMouseX = e.clientX;
    panorama.lastMouseY = e.clientY;
    hideHotspotPopover();
  });

  window.addEventListener("mouseup", () => {
    panorama.isDragging = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!panorama.isDragging) return;
    const dx = e.clientX - panorama.lastMouseX;
    const dy = e.clientY - panorama.lastMouseY;
    panorama.lastMouseX = e.clientX;
    panorama.lastMouseY = e.clientY;

    const sensitivity = 0.25 * (panorama.fov / 70);
    panorama.yaw = (panorama.yaw - dx * sensitivity + 360) % 360;
    panorama.pitch = Math.max(-50, Math.min(50, panorama.pitch + dy * sensitivity));
  });

  // Mouse Wheel Zoom
  panorama.canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    panorama.fov = Math.max(30, Math.min(95, panorama.fov + e.deltaY * 0.05));
  }, { passive: false });

  // Touch Controls
  panorama.canvas.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      panorama.isDragging = true;
      panorama.lastMouseX = e.touches[0].clientX;
      panorama.lastMouseY = e.touches[0].clientY;
      hideHotspotPopover();
    }
  }, { passive: true });

  window.addEventListener("touchend", () => {
    panorama.isDragging = false;
  });

  window.addEventListener("touchmove", (e) => {
    if (!panorama.isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - panorama.lastMouseX;
    const dy = e.touches[0].clientY - panorama.lastMouseY;
    panorama.lastMouseX = e.touches[0].clientX;
    panorama.lastMouseY = e.touches[0].clientY;

    const sensitivity = 0.3 * (panorama.fov / 70);
    panorama.yaw = (panorama.yaw - dx * sensitivity + 360) % 360;
    panorama.pitch = Math.max(-50, Math.min(50, panorama.pitch + dy * sensitivity));
  }, { passive: true });

  // Canvas Click for Hotspots
  panorama.canvas.addEventListener("click", handlePanoramaCanvasClick);

  // HUD Tour Controls
  if (dom.tourAutoRotateBtn) {
    dom.tourAutoRotateBtn.addEventListener("click", () => {
      panorama.autoRotate = !panorama.autoRotate;
      dom.tourAutoRotateBtn.classList.toggle("active", panorama.autoRotate);
    });
  }
  if (dom.tourZoomInBtn) {
    dom.tourZoomInBtn.addEventListener("click", () => {
      panorama.fov = Math.max(30, panorama.fov - 10);
    });
  }
  if (dom.tourZoomOutBtn) {
    dom.tourZoomOutBtn.addEventListener("click", () => {
      panorama.fov = Math.min(95, panorama.fov + 10);
    });
  }
  if (dom.tourResetBtn) {
    dom.tourResetBtn.addEventListener("click", () => {
      panorama.yaw = 0;
      panorama.pitch = 0;
      panorama.fov = 70;
    });
  }

  // Start continuous render loop
  renderPanoramaLoop();
}

function resizePanoramaCanvas() {
  if (!panorama.canvas) return;
  const rect = panorama.canvas.parentElement.getBoundingClientRect();
  if (rect.width > 0) {
    panorama.canvas.width = rect.width;
    panorama.canvas.height = rect.height || 360;
  }
}

function setupPanoramaForSite(site) {
  const tourData = site.virtualTour || {
    panoramaUrl: site.imageUrl,
    title: `360° Virtual View - ${site.name}`,
    hotspots: [
      { x: 50, y: 50, title: "Monolithic Sanctum", desc: "Sacred inner shrine representing ancient architectural grandeur." }
    ]
  };

  if (dom.tourTitleText) {
    dom.tourTitleText.textContent = tourData.title || `360° Panorama - ${site.name}`;
  }

  panorama.hotspots = tourData.hotspots || [];
  panorama.isLoaded = false;

  panorama.image.crossOrigin = "anonymous";
  panorama.image.onload = () => {
    panorama.isLoaded = true;
    resizePanoramaCanvas();
  };
  panorama.image.src = tourData.panoramaUrl || site.imageUrl;
}

function renderPanoramaLoop() {
  if (panorama.canvas && panorama.ctx) {
    drawPanoramaFrame();
  }
  panorama.animFrameId = requestAnimationFrame(renderPanoramaLoop);
}

function drawPanoramaFrame() {
  const { canvas, ctx, image, isLoaded, autoRotate, isDragging } = panorama;
  const width = canvas.width;
  const height = canvas.height;

  // Clear canvas
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, width, height);

  if (!isLoaded || !image.width) {
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("Loading 360° Panorama...", width / 2, height / 2);
    return;
  }

  // Auto rotation
  if (autoRotate && !isDragging) {
    panorama.yaw = (panorama.yaw + panorama.autoRotateSpeed) % 360;
  }

  // Update Compass
  if (dom.tourCompass) {
    const needle = dom.tourCompass.querySelector(".compass-needle");
    if (needle) needle.style.transform = `rotate(${-panorama.yaw}deg)`;
  }

  // Spherical/Cylindrical Equirectangular Projection
  const imgW = image.width;
  const imgH = image.height;

  // Fraction of image visible horizontally determined by FOV
  const fovRatio = panorama.fov / 360;
  const visibleSourceWidth = imgW * fovRatio;
  const startX = (panorama.yaw / 360) * imgW;

  // Vertical pitch offset
  const pitchOffset = (panorama.pitch / 90) * (imgH * 0.25);
  const startY = Math.max(0, Math.min(imgH * 0.4, (imgH * 0.2) - pitchOffset));
  const visibleSourceHeight = imgH * 0.6;

  // Render wrapped panorama image smoothly
  if (startX + visibleSourceWidth <= imgW) {
    ctx.drawImage(image, startX, startY, visibleSourceWidth, visibleSourceHeight, 0, 0, width, height);
  } else {
    const firstChunkWidth = imgW - startX;
    const secondChunkWidth = visibleSourceWidth - firstChunkWidth;
    const firstDestWidth = (firstChunkWidth / visibleSourceWidth) * width;
    const secondDestWidth = width - firstDestWidth;

    ctx.drawImage(image, startX, startY, firstChunkWidth, visibleSourceHeight, 0, 0, firstDestWidth, height);
    ctx.drawImage(image, 0, startY, secondChunkWidth, visibleSourceHeight, firstDestWidth, 0, secondDestWidth, height);
  }

  // Draw Hotspots
  drawHotspots(width, height);
}

function drawHotspots(w, h) {
  const ctx = panorama.ctx;
  if (!panorama.hotspots) return;

  const time = Date.now() * 0.003;
  const pulseSize = 6 + Math.sin(time) * 2;

  panorama.hotspots.forEach((hs, idx) => {
    // Project hotspot coordinates relative to yaw & pitch
    const hsYaw = (hs.x / 100) * 360;
    let diffYaw = hsYaw - panorama.yaw;
    if (diffYaw < -180) diffYaw += 360;
    if (diffYaw > 180) diffYaw -= 360;

    // Check if within current viewport FOV
    const halfFov = panorama.fov / 2;
    if (Math.abs(diffYaw) <= halfFov) {
      const screenX = ((diffYaw + halfFov) / panorama.fov) * w;
      const screenY = ((hs.y / 100) * h) + (panorama.pitch * 1.5);

      hs._screenX = screenX;
      hs._screenY = screenY;

      // Outer Pulse Circle
      ctx.beginPath();
      ctx.arc(screenX, screenY, pulseSize + 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(234, 88, 12, 0.35)";
      ctx.fill();

      // Inner Core Pin
      ctx.beginPath();
      ctx.arc(screenX, screenY, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#ea580c";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.5;
      ctx.fill();
      ctx.stroke();

      // Mini Label
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.fillRect(screenX - 45, screenY - 28, 90, 18);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 10px system-ui";
      ctx.textAlign = "center";
      ctx.fillText(hs.title || "Feature", screenX, screenY - 15);
    } else {
      hs._screenX = -100;
      hs._screenY = -100;
    }
  });
}

function handlePanoramaCanvasClick(e) {
  const rect = panorama.canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  let clickedHotspot = null;
  panorama.hotspots.forEach(hs => {
    if (hs._screenX > 0 && hs._screenY > 0) {
      const dist = Math.hypot(clickX - hs._screenX, clickY - hs._screenY);
      if (dist <= 24) {
        clickedHotspot = hs;
      }
    }
  });

  if (clickedHotspot) {
    showHotspotPopover(clickedHotspot, clickX, clickY);
  } else {
    hideHotspotPopover();
  }
}

function showHotspotPopover(hs, x, y) {
  if (!dom.tourHotspotPopover) return;
  dom.hotspotTitle.textContent = hs.title;
  dom.hotspotDesc.textContent = hs.desc;

  const left = Math.min(panorama.canvas.width - 240, Math.max(10, x - 120));
  const top = Math.max(10, y - 90);

  dom.tourHotspotPopover.style.left = `${left}px`;
  dom.tourHotspotPopover.style.top = `${top}px`;
  dom.tourHotspotPopover.style.display = "block";
}

function hideHotspotPopover() {
  if (dom.tourHotspotPopover) {
    dom.tourHotspotPopover.style.display = "none";
  }
}

// -------------------------------------------------------------
// 6. Web Speech API (window.speechSynthesis) Audio Guide
// -------------------------------------------------------------
function initAudioGuide() {
  if (!('speechSynthesis' in window)) {
    if (dom.ttsStatusText) {
      dom.ttsStatusText.textContent = "Audio Guide not supported in this browser.";
    }
    if (dom.ttsPlayBtn) dom.ttsPlayBtn.disabled = true;
    return;
  }

  // Load available voices
  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  // Controls Event Listeners
  if (dom.ttsPlayBtn) dom.ttsPlayBtn.addEventListener("click", handleAudioGuidePlay);
  if (dom.ttsPauseBtn) dom.ttsPauseBtn.addEventListener("click", handleAudioGuidePause);
  if (dom.ttsStopBtn) dom.ttsStopBtn.addEventListener("click", stopAudioGuide);
}

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  appState.availableVoices = voices;

  if (dom.ttsVoiceSelect) {
    dom.ttsVoiceSelect.innerHTML = "";
    
    // Filter for English voices, prioritizing Indian English
    const engVoices = voices.filter(v => v.lang.startsWith("en"));
    const listToRender = engVoices.length > 0 ? engVoices : voices;

    listToRender.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v.name;
      opt.textContent = `${v.name} (${v.lang})${v.lang.includes("en-IN") ? ' 🇮🇳' : ''}`;
      if (v.lang.includes("en-IN") || v.name.includes("India")) {
        opt.selected = true;
      }
      dom.ttsVoiceSelect.appendChild(opt);
    });
  }
}

function handleAudioGuidePlay() {
  if (!('speechSynthesis' in window)) return;

  // If currently paused, resume
  if (appState.isPaused && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    appState.isPaused = false;
    appState.isSpeaking = true;
    updateAudioUI(true);
    return;
  }

  // If already speaking and user clicks play again, stop and restart
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const site = appState.currentSiteObj;
  if (!site) return;

  // Build clean comprehensive narration text
  const narrative = `${site.name}, situated in ${site.district || site.stateName}, ${site.stateName}. ` +
    `Constructed in ${site.builtIn}. ` +
    `Architectural style is ${site.architecturalStyle}. ` +
    `${site.description} ` +
    `Cultural Significance: ${site.culturalSignificance} ` +
    `Best time to visit this monument is ${site.bestTime}. ` +
    (site.festival ? `Famous festival celebration includes ${site.festival.name}.` : '');

  const utterance = new SpeechSynthesisUtterance(narrative);

  // Speed Rate
  if (dom.ttsRateSelect) {
    utterance.rate = parseFloat(dom.ttsRateSelect.value) || 1.0;
  }

  // Voice Selection
  const selectedVoiceName = dom.ttsVoiceSelect?.value;
  if (selectedVoiceName) {
    const v = appState.availableVoices.find(voice => voice.name === selectedVoiceName);
    if (v) utterance.voice = v;
  }

  utterance.onstart = () => {
    appState.isSpeaking = true;
    appState.isPaused = false;
    updateAudioUI(true);
    if (dom.ttsStatusText) {
      dom.ttsStatusText.textContent = `🎙️ Narrating: ${site.name}`;
    }
  };

  utterance.onpause = () => {
    appState.isPaused = true;
    appState.isSpeaking = false;
    updateAudioUI(false, true);
    if (dom.ttsStatusText) {
      dom.ttsStatusText.textContent = `⏸️ Narration Paused`;
    }
  };

  utterance.onresume = () => {
    appState.isPaused = false;
    appState.isSpeaking = true;
    updateAudioUI(true);
    if (dom.ttsStatusText) {
      dom.ttsStatusText.textContent = `🎙️ Narrating: ${site.name}`;
    }
  };

  utterance.onend = () => {
    appState.isSpeaking = false;
    appState.isPaused = false;
    updateAudioUI(false);
    if (dom.ttsStatusText) {
      dom.ttsStatusText.textContent = `Completed Audio Guide for ${site.name}`;
    }
  };

  utterance.onerror = (e) => {
    console.warn("SpeechSynthesis error:", e);
    appState.isSpeaking = false;
    appState.isPaused = false;
    updateAudioUI(false);
  };

  window.speechSynthesis.speak(utterance);
}

function handleAudioGuidePause() {
  if (!('speechSynthesis' in window)) return;
  if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
    appState.isPaused = true;
    updateAudioUI(false, true);
  }
}

function stopAudioGuide() {
  if (!('speechSynthesis' in window)) return;
  if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
    window.speechSynthesis.cancel();
  }
  appState.isSpeaking = false;
  appState.isPaused = false;
  updateAudioUI(false);
  if (dom.ttsStatusText && appState.currentSiteObj) {
    dom.ttsStatusText.textContent = `Audio Guide ready for ${appState.currentSiteObj.name}`;
  }
}

function updateAudioUI(isPlaying, isPaused = false) {
  if (!dom.audioGuidePlayer) return;

  dom.audioGuidePlayer.classList.toggle("playing", isPlaying);

  if (isPlaying) {
    dom.ttsPlayBtn.style.display = "none";
    dom.ttsPauseBtn.style.display = "inline-flex";
    dom.ttsStopBtn.style.display = "inline-flex";
  } else if (isPaused) {
    dom.ttsPlayBtn.style.display = "inline-flex";
    dom.ttsPlayLabel.textContent = "Resume";
    dom.ttsPauseBtn.style.display = "none";
    dom.ttsStopBtn.style.display = "inline-flex";
  } else {
    dom.ttsPlayBtn.style.display = "inline-flex";
    dom.ttsPlayLabel.textContent = "Listen Audio Guide";
    dom.ttsPauseBtn.style.display = "none";
    dom.ttsStopBtn.style.display = "none";
  }
}

// -------------------------------------------------------------
// 7. Live Search & Multi-Category Filter Engine
// -------------------------------------------------------------
function initLiveSearchAndFilters() {
  if (!dom.liveSearchInput) return;

  // Search Input Listener with Debounce
  let debounceTimer = null;
  dom.liveSearchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    const val = e.target.value;
    appState.searchQuery = val;

    if (dom.clearSearchBtn) {
      dom.clearSearchBtn.style.display = val ? "block" : "none";
    }

    debounceTimer = setTimeout(() => {
      performLiveSearch();
    }, 100);
  });

  // Focus & Blur
  dom.liveSearchInput.addEventListener("focus", () => {
    performLiveSearch();
  });

  // Search Submit Action (shared by Enter key and Search Button)
  function triggerSearchAction() {
    const val = (dom.liveSearchInput ? dom.liveSearchInput.value : "").trim().toLowerCase();
    
    // Always execute search and ensure suggestions flyout is open
    performLiveSearch();
    if (dom.searchResultsFlyout) dom.searchResultsFlyout.style.display = "block";

    if (!val) return;

    // 1. Check for state match in STATES_DATA
    if (typeof STATES_DATA !== "undefined") {
      const matchedState = STATES_DATA.find(s => 
        s.name.toLowerCase() === val ||
        s.id.toLowerCase() === val ||
        s.name.toLowerCase().startsWith(val)
      );
      if (matchedState) {
        window.location.href = getStatePageUrl(matchedState.id);
        return;
      }
    }

    // 2. Check for monument name match in HERITAGE_SITES
    if (typeof HERITAGE_SITES !== "undefined") {
      const matchedSite = HERITAGE_SITES.find(s => 
        s.name.toLowerCase() === val ||
        s.name.toLowerCase().startsWith(val) ||
        (s.district && s.district.toLowerCase() === val)
      );
      if (matchedSite) {
        window.location.href = `${getStatePageUrl(matchedSite.stateId)}?site=${encodeURIComponent(matchedSite.id)}`;
        return;
      }
    }

    // 3. Fallback to the first item currently rendered in the suggestions list
    const firstStateItem = dom.searchResultsList?.querySelector(".search-state-result-item");
    if (firstStateItem) {
      const stateId = firstStateItem.getAttribute("data-state");
      if (stateId) {
        window.location.href = getStatePageUrl(stateId);
        return;
      }
    }

    const firstSiteItem = dom.searchResultsList?.querySelector(".search-result-item");
    if (firstSiteItem) {
      const siteId = firstSiteItem.getAttribute("data-site");
      const stateId = firstSiteItem.getAttribute("data-state");
      if (stateId && siteId) {
        window.location.href = `${getStatePageUrl(stateId)}?site=${encodeURIComponent(siteId)}`;
        return;
      }
    }
  }

  // Enter Key: Trigger Search Action
  dom.liveSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      triggerSearchAction();
    }
  });

  // Dedicated Search Button Click
  if (dom.searchSubmitBtn) {
    dom.searchSubmitBtn.addEventListener("click", () => {
      triggerSearchAction();
    });
  }

  // Search Scope Option Dropdown Listener
  if (dom.searchScopeSelect) {
    dom.searchScopeSelect.addEventListener("change", () => {
      const scope = dom.searchScopeSelect.value;
      appState.activeFilter = scope;

      // Sync filter pills active state
      const filterButtons = document.querySelectorAll('.filter-btn, .filter-pill');
      filterButtons.forEach(btn => {
        const filterVal = btn.dataset.category || btn.dataset.filter || btn.getAttribute("data-filter") || "all";
        if (filterVal === scope) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      performLiveSearch();
      if (dom.liveSearchInput) dom.liveSearchInput.focus();
    });
  }

  // Clear Button
  if (dom.clearSearchBtn) {
    dom.clearSearchBtn.addEventListener("click", () => {
      dom.liveSearchInput.value = "";
      appState.searchQuery = "";
      dom.clearSearchBtn.style.display = "none";
      performLiveSearch();
      dom.liveSearchInput.focus();
    });
  }

  // Close Flyout Button
  if (dom.closeFlyoutBtn) {
    dom.closeFlyoutBtn.addEventListener("click", () => {
      dom.searchResultsFlyout.style.display = "none";
    });
  }

  // Quick Filter Buttons / Pills Toggle
  const filterButtons = document.querySelectorAll('.filter-btn, .filter-pill');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active state from all filter buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active state to clicked button
      button.classList.add('active');

      const category = button.dataset.category || button.dataset.filter || button.getAttribute("data-filter") || "all";
      appState.activeFilter = category;

      // Sync search scope dropdown if matching option exists
      if (dom.searchScopeSelect) {
        const matchingOption = Array.from(dom.searchScopeSelect.options).find(opt => opt.value === category);
        if (matchingOption) {
          dom.searchScopeSelect.value = category;
        } else {
          dom.searchScopeSelect.value = "all";
        }
      }

      performLiveSearch();
    });
  });

  // Global Keyboard Shortcuts (Ctrl + K / Cmd + K, Escape)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      dom.liveSearchInput.focus();
      dom.liveSearchInput.select();
    }
    if (e.key === "Escape" && dom.searchResultsFlyout) {
      dom.searchResultsFlyout.style.display = "none";
    }
  });

  // Close Flyout when clicking outside
  document.addEventListener("click", (e) => {
    if (!dom.searchResultsFlyout) return;
    const isInside = (dom.liveSearchInput && dom.liveSearchInput.contains(e.target)) || 
                     (dom.searchScopeSelect && dom.searchScopeSelect.contains(e.target)) ||
                     (dom.searchSubmitBtn && dom.searchSubmitBtn.contains(e.target)) ||
                     dom.searchResultsFlyout.contains(e.target) ||
                     (dom.filterPillsRow && dom.filterPillsRow.contains(e.target));
    if (!isInside) {
      dom.searchResultsFlyout.style.display = "none";
    }
  });
}

function searchMatchingStates(query, filterOpts = {}) {
  if (typeof STATES_DATA === "undefined") return [];
  let states = STATES_DATA;

  if (filterOpts.region && filterOpts.region !== "all") {
    const reg = filterOpts.region.toLowerCase();
    states = states.filter(s => s.region.toLowerCase().includes(reg));
  }

  if (!query || !query.trim()) return states;
  const q = query.toLowerCase().trim();

  return states.filter(s => 
    s.name.toLowerCase().includes(q) ||
    s.id.toLowerCase().includes(q) ||
    s.capital.toLowerCase().includes(q) ||
    s.region.toLowerCase().includes(q)
  );
}

function performLiveSearch() {
  const query = (appState.searchQuery || "").trim();
  const filter = appState.activeFilter || (dom.searchScopeSelect ? dom.searchScopeSelect.value : "all");

  const filterOpts = {
    unescoOnly: filter === "unesco",
    category: ['temple', 'fort', 'cave'].includes(filter) ? filter : 'all',
    region: ['south', 'north', 'west', 'east'].includes(filter) ? filter : 'all'
  };

  // Scope: 'states' -> only states, 'monuments' -> only monuments, etc.
  let matchedStates = [];
  let matchedSites = [];

  if (filter === "states") {
    matchedStates = query ? searchMatchingStates(query, filterOpts) : STATES_DATA.slice(0, 10);
    matchedSites = [];
  } else if (filter === "monuments") {
    matchedStates = [];
    matchedSites = searchHeritageSites(query, filterOpts);
  } else {
    matchedStates = query ? searchMatchingStates(query, filterOpts) : [];
    matchedSites = searchHeritageSites(query, filterOpts);
  }

  renderSearchResults(matchedStates, matchedSites, query);
}

function renderSearchResults(matchedStates, matchedSites, query) {
  if (!dom.searchResultsFlyout || !dom.searchResultsList) return;

  dom.searchResultsFlyout.style.display = "block";
  const totalCount = matchedStates.length + matchedSites.length;
  dom.resultsCountText.textContent = `${totalCount} suggestion${totalCount === 1 ? '' : 's'} (Press Enter to open)`;
  dom.searchResultsList.innerHTML = "";

  if (totalCount === 0) {
    dom.searchResultsList.innerHTML = `
      <div class="no-results-box">
        <span>🔍 No states or heritage sites found matching "<strong>${query}</strong>".</span>
      </div>
    `;
    return;
  }

  // 1. Render Matching States Section
  if (matchedStates.length > 0) {
    const stateHeader = document.createElement("div");
    stateHeader.className = "search-category-header";
    stateHeader.innerHTML = `<span>🏛️</span> <span>Indian States &amp; Union Territories (Direct Navigation)</span>`;
    dom.searchResultsList.appendChild(stateHeader);

    matchedStates.slice(0, 6).forEach(st => {
      const stateCount = getSitesByState(st.id).length;
      const item = document.createElement("div");
      item.className = "search-state-result-item";
      item.setAttribute("data-state", st.id);
      item.innerHTML = `
        <div class="state-result-info">
          <div class="state-result-icon">${st.icon || '🏛️'}</div>
          <div>
            <div class="state-result-title">${st.name}</div>
            <div class="state-result-meta">Capital: ${st.capital} • ${st.region} • ${stateCount} Site${stateCount === 1 ? '' : 's'}</div>
          </div>
        </div>
        <div class="state-result-cta">
          <span>Open Portal</span> <span>➔</span>
        </div>
      `;

      item.addEventListener("click", () => {
        dom.searchResultsFlyout.style.display = "none";
        const url = getStatePageUrl(st.id);
        window.location.href = url;
      });

      dom.searchResultsList.appendChild(item);
    });
  }

  // 2. Render Matching Heritage Sites Section
  if (matchedSites.length > 0) {
    const siteHeader = document.createElement("div");
    siteHeader.className = "search-category-header";
    siteHeader.innerHTML = `<span>📍</span> <span>Heritage Monuments &amp; Shrines</span>`;
    dom.searchResultsList.appendChild(siteHeader);

    matchedSites.slice(0, 8).forEach(site => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.setAttribute("data-site", site.id);
      item.setAttribute("data-state", site.stateId);
      item.innerHTML = `
        <div class="site-thumb-wrapper">
          <img src="${site.imageUrl || ''}" alt="${site.name}" class="site-thumb" loading="lazy" onerror="handleImageError(this)">
        </div>
        <div class="result-info">
          <div class="result-title">${site.name}</div>
          <div class="result-meta">
            <span>📍 ${site.stateName}</span>
            <span>•</span>
            <span class="result-badge">${site.category || 'Monument'}</span>
            ${site.isUnesco ? '<span class="result-unesco-tag">🏛️ UNESCO</span>' : ''}
            <span>⭐ ${site.rating || 4.8}</span>
          </div>
        </div>
        <div class="state-result-cta" style="font-size: 0.72rem;">
          <span>Explore</span> <span>➔</span>
        </div>
      `;

      item.addEventListener("click", () => {
        dom.searchResultsFlyout.style.display = "none";
        const url = `${getStatePageUrl(site.stateId)}?site=${encodeURIComponent(site.id)}`;
        window.location.href = url;
      });

      dom.searchResultsList.appendChild(item);
    });
  }
}

// -------------------------------------------------------------
// Helper: Resolve Dedicated State Page URL
// -------------------------------------------------------------
function getStatePageUrl(stateId) {
  if (!stateId) return "states/andhra-pradesh.html";
  const matched = getStateById(stateId);
  const name = matched ? matched.name : stateId;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return `states/${slug}.html`;
}
window.getStatePageUrl = getStatePageUrl;

// -------------------------------------------------------------
// 8. Interactive Map Events & Hover Tooltips
// -------------------------------------------------------------
function initMapInteractions() {
  const tooltip = document.getElementById('map-tooltip') || dom.mapTooltip;
  const container = document.querySelector('.map-container') || dom.mapContainer;
  const stateGroups = document.querySelectorAll('.state-group');

  if (stateGroups.length > 0) {
    stateGroups.forEach((group) => {
      const status = group.getAttribute('data-status') || 'active';
      const label = group.querySelector('.state-label')?.textContent || group.getAttribute('data-name') || 'State';
      const stateId = group.getAttribute('data-state') || group.getAttribute('data-state-id');

      group.addEventListener('mouseenter', (e) => {
        if (tooltip) {
          tooltip.innerHTML = status === 'active'
            ? `<strong>${label}</strong> <span class="status-tag status-active">Explore Portal →</span>`
            : `<strong>${label}</strong> <span class="status-tag status-inactive">Coming Soon</span>`;
          tooltip.classList.add('visible');
        }
      });

      group.addEventListener('mousemove', (e) => {
        if (tooltip && container) {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          tooltip.style.left = `${x}px`;
          tooltip.style.top = `${y}px`;
        }
      });

      group.addEventListener('mouseleave', () => {
        if (tooltip) {
          tooltip.classList.remove('visible');
        }
      });

      group.addEventListener('click', (e) => {
        if (status === 'inactive') {
          e.preventDefault();
          // Block accidental navigation or empty modals
          return;
        }
        if (stateId) {
          const url = getStatePageUrl(stateId);
          window.location.href = url;
        }
      });
    });
  } else {
    // Fallback for standalone paths
    const paths = document.querySelectorAll(".state-path");
    dom.statePaths = paths;
    paths.forEach(path => {
      path.addEventListener("click", (e) => {
        e.preventDefault();
        const stateId = path.getAttribute("data-state") || path.id.replace("map-", "");
        if (stateId) {
          const url = getStatePageUrl(stateId);
          window.location.href = url;
        }
      });
    });
  }

  // Quick State Chips Click -> Opens Dedicated State Page Directly
  dom.stateChips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      e.preventDefault();
      const stateId = chip.getAttribute("data-state");
      if (stateId) {
        const url = getStatePageUrl(stateId);
        window.location.href = url;
      }
    });
  });
}

function updateMapHighlight(stateId) {
  const cleanTarget = stateId.replace(/[\s\-_]/g, '').toLowerCase();
  const groups = document.querySelectorAll(".state-group");
  if (groups.length > 0) {
    groups.forEach(group => {
      const gState = (group.getAttribute("data-state") || "").replace(/[\s\-_]/g, '').toLowerCase();
      const gId = (group.getAttribute("data-state-id") || "").replace(/[\s\-_]/g, '').toLowerCase();
      const path = group.querySelector(".state-path");
      if (gState === cleanTarget || gId === cleanTarget) {
        group.classList.add("active-state");
        if (path) path.classList.add("active-state");
      } else {
        group.classList.remove("active-state");
        if (path) path.classList.remove("active-state");
      }
    });
  } else {
    const paths = document.querySelectorAll(".state-path");
    paths.forEach(path => {
      const pState = (path.getAttribute("data-state") || "").replace(/[\s\-_]/g, '').toLowerCase();
      const pId = path.id.replace("map-", "").replace(/[\s\-_]/g, '').toLowerCase();
      if (pState === cleanTarget || pId === cleanTarget) {
        path.classList.add("active-state");
      } else {
        path.classList.remove("active-state");
      }
    });
  }
}

function updateQuickChips(stateId) {
  dom.stateChips.forEach(chip => {
    if (chip.getAttribute("data-state") === stateId) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

// -------------------------------------------------------------
// 9. Dropdown & Open Actions Listeners
// -------------------------------------------------------------
function initDropdownListeners() {
  if (typeof STATES_DATA === "undefined") return;

  // 1. Main State Select Dropdown
  if (dom.stateSelect) {
    dom.stateSelect.innerHTML = '<option value="">Select a State / UT</option>';
    STATES_DATA.forEach(st => {
      const opt = document.createElement("option");
      opt.value = st.id;
      opt.textContent = `${st.icon} ${st.name} (${st.region})`;
      if (st.id === "AndhraPradesh") opt.selected = true;
      dom.stateSelect.appendChild(opt);
    });

    dom.stateSelect.addEventListener("change", (e) => {
      const selectedState = e.target.value;
      if (selectedState) {
        selectState(selectedState);
      }
    });
  }

  // 2. Live Dashboard State Switcher Dropdown
  const dashboardStatePicker = document.getElementById("dashboard-state-picker");
  if (dashboardStatePicker) {
    dashboardStatePicker.innerHTML = '<option value="">-- Choose State to Display --</option>';
    STATES_DATA.forEach(st => {
      const opt = document.createElement("option");
      opt.value = st.id;
      opt.textContent = `${st.icon} ${st.name} (${st.region})`;
      if (st.id === "AndhraPradesh") opt.selected = true;
      dashboardStatePicker.appendChild(opt);
    });

    dashboardStatePicker.addEventListener("change", (e) => {
      const selectedState = e.target.value;
      if (selectedState) {
        selectState(selectedState);
      }
    });
  }

  // 3. Live Dashboard Quick State Switching Pills
  const dashboardQuickPills = document.getElementById("dashboardQuickPills");
  if (dashboardQuickPills) {
    dashboardQuickPills.innerHTML = STATES_DATA.map(st => `
      <button class="dashboard-state-pill-btn ${st.id === 'AndhraPradesh' ? 'active' : ''}" data-state="${st.id}">
        <span>${st.icon}</span> <span>${st.name}</span>
      </button>
    `).join("");

    dashboardQuickPills.querySelectorAll(".dashboard-state-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const stId = btn.getAttribute("data-state");
        if (stId) {
          selectState(stId);
        }
      });
    });
  }

  // Open Button next to bottom dropdown
  const btnOpenSelectedState = document.getElementById("btnOpenSelectedState");
  if (btnOpenSelectedState) {
    btnOpenSelectedState.addEventListener("click", () => {
      const stateId = dom.stateSelect?.value || appState.currentStateId || "AndhraPradesh";
      const matched = getStateById(stateId);
      const name = matched ? matched.name : stateId;
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      window.open(`states/${slug}.html`, "_blank");
    });
  }

  // Spotlight Live Preview Button (embedded modal)
  const spotlightPreviewBtn = document.getElementById("spotlight-preview-btn");
  if (spotlightPreviewBtn) {
    spotlightPreviewBtn.addEventListener("click", () => {
      const stateId = appState.currentStateId || dom.stateSelect?.value || "AndhraPradesh";
      openStatePortalModal(stateId);
    });
  }

  // IFrame Modal Close Handlers
  const iframeModal = document.getElementById("statePortalIframeModal");
  const btnCloseIframeModal = document.getElementById("btnCloseIframeModal");
  const iframeBackdrop = document.getElementById("iframeModalBackdrop");
  function closeIframeModal() {
    if (iframeModal) {
      iframeModal.style.display = "none";
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      const iframe = document.getElementById("statePortalIframe");
      if (iframe) iframe.src = "about:blank";
    }
  }
  if (btnCloseIframeModal) btnCloseIframeModal.addEventListener("click", closeIframeModal);
  if (iframeBackdrop) iframeBackdrop.addEventListener("click", closeIframeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && iframeModal && iframeModal.style.display !== "none") {
      closeIframeModal();
    }
  });

  if (dom.siteSelect) {
    dom.siteSelect.addEventListener("change", (e) => {
      const selectedSiteId = e.target.value;
      if (!selectedSiteId) return;

      const site = appState.currentSitesList.find(s => s.id === selectedSiteId) || getSiteById(selectedSiteId);
      if (site) {
        displaySiteDetails(site);
      }
    });
  }

  if (dom.shareSiteBtn) {
    dom.shareSiteBtn.addEventListener("click", shareCurrentSite);
  }
}

// Function to open the Live State Portal Modal
function openStatePortalModal(stateId) {
  const modal = document.getElementById("statePortalIframeModal");
  const iframe = document.getElementById("statePortalIframe");
  const modalTitle = document.getElementById("iframeModalTitle");
  const modalIcon = document.getElementById("iframeModalIcon");
  const newTabBtn = document.getElementById("iframeModalNewTabBtn");

  if (!modal || !iframe) return;

  const matched = getStateById(stateId);
  const name = matched ? matched.name : stateId;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  if (modalTitle) modalTitle.textContent = `${name} Heritage Portal`;
  if (modalIcon) modalIcon.textContent = matched ? matched.icon : "🏛️";
  if (newTabBtn) newTabBtn.href = `states/${slug}.html`;

  iframe.src = `states/${slug}.html`;
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
}
window.openStatePortalModal = openStatePortalModal;

// -------------------------------------------------------------
// 10. Web Share API & Clipboard Fallback
// -------------------------------------------------------------
async function shareCurrentSite() {
  const site = appState.currentSiteObj;
  if (!site) return;

  const shareData = {
    title: `${site.name} - Indian Heritage`,
    text: `Explore ${site.name} in ${site.stateName}. ${site.description.slice(0, 140)}...`,
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') copyToClipboard(window.location.href);
    }
  } else {
    copyToClipboard(window.location.href);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("🔗 Link copied to clipboard! Share the heritage of India with friends.");
  }).catch(() => {
    prompt("Copy this link to share:", text);
  });
}

// -------------------------------------------------------------
// 11. Theme Controller
// -------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem("indian_heritage_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButton(savedTheme);

  if (dom.themeToggleBtn) {
    dom.themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("indian_heritage_theme", next);
      updateThemeButton(next);
    });
  }
}

function updateThemeButton(theme) {
  if (dom.themeToggleBtn) {
    dom.themeToggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    dom.themeToggleBtn.title = theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme";
  }
}

// -------------------------------------------------------------
// 12. Firestore Connection Indicator
// -------------------------------------------------------------
function initFirebaseStatusIndicator() {
  if (typeof db !== "undefined" && db) {
    if (dom.dbStatusText) dom.dbStatusText.textContent = "Firestore Active";
  } else {
    if (dom.dbStatusText) dom.dbStatusText.textContent = "Offline Ready";
  }
}

// -------------------------------------------------------------
// 13. States Directory Explorer & Modal Controller
// -------------------------------------------------------------
function initStatesDirectory() {
  const container = document.getElementById("modalStatesGrid") || document.getElementById("statesGridContainer");
  const regionPills = document.querySelectorAll("#modalRegionPills .filter-pill, #stateRegionPills .filter-pill");
  const searchInput = document.getElementById("modalStateSearch") || document.getElementById("stateGridSearch");
  const modal = document.getElementById("statesDirectoryModal");
  const openBtn = document.getElementById("btnOpenStatesModal");
  const closeBtn = document.getElementById("btnCloseStatesModal");
  const backdrop = document.getElementById("statesModalBackdrop");

  if (typeof STATES_DATA === "undefined") return;

  // Modal Open / Close handlers
  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
      if (searchInput) searchInput.focus();
    });
  }

  function closeModal() {
    if (modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.style.display !== "none") {
      closeModal();
    }
  });

  if (!container) return;

  let activeRegion = "all";
  let searchQuery = "";

  function renderStateCards() {
    let filtered = STATES_DATA;

    if (activeRegion !== "all") {
      filtered = filtered.filter(s => s.region.toLowerCase() === activeRegion.toLowerCase());
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.capital.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">🔍</span>
          <p>No states found matching "<strong>${searchQuery}</strong>".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(state => {
      const slug = state.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const sitesCount = typeof HERITAGE_SITES !== "undefined" 
        ? HERITAGE_SITES.filter(s => s.stateId.toLowerCase() === state.id.toLowerCase()).length
        : 0;

      const badgeText = sitesCount > 0 
        ? `<span class="state-dir-badge badge-sites">🏛️ ${sitesCount} Monument${sitesCount === 1 ? '' : 's'}</span>`
        : `<span class="state-dir-badge">📍 Regional Portal</span>`;

      return `
        <a href="states/${slug}.html" class="state-dir-card">
          <div>
            <div class="state-dir-header">
              <div class="state-dir-icon">${state.icon}</div>
              <div>
                <div class="state-dir-title">${state.name}</div>
                <div class="state-dir-capital">Capital: ${state.capital}</div>
              </div>
            </div>
            <div class="state-dir-body">
              <span class="state-dir-badge">🌏 ${state.region}</span>
              ${badgeText}
            </div>
          </div>
          <div class="state-dir-footer">
            <span>Open Dedicated Page</span>
            <span>➔</span>
          </div>
        </a>
      `;
    }).join("");
  }

  // Render initial list
  renderStateCards();

  // Region Filter Pills Listener
  regionPills.forEach(pill => {
    pill.addEventListener("click", () => {
      regionPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeRegion = pill.getAttribute("data-region") || "all";
      renderStateCards();
    });
  });

  // Search Input Listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderStateCards();
    });
  }
}

// -------------------------------------------------------------
// 14. Featured Highlights Horizontal Slider Controller
// -------------------------------------------------------------
function initFeaturedSlider() {
  const track = document.getElementById("sliderTrack");
  const trackContainer = document.getElementById("sliderTrackContainer");
  const prevBtn = document.getElementById("sliderPrevBtn");
  const nextBtn = document.getElementById("sliderNextBtn");
  const playPauseBtn = document.getElementById("sliderPlayPauseBtn");
  const dotsRow = document.getElementById("sliderDotsRow");

  if (!track || typeof HERITAGE_SITES === "undefined") return;

  // Curate iconic pan-India sites representing diverse cultural & architectural traditions
  const featuredSites = HERITAGE_SITES.slice(0, 14);

  // Render cards into horizontal track
  track.innerHTML = featuredSites.map(site => {
    const matchedState = getStateById(site.stateId);
    const stateName = matchedState ? matchedState.name : site.stateName;
    const slug = stateName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const desc = (site.description || "").replace(/<[^>]*>?/gm, "").substring(0, 105) + "...";
    const categoryName = site.category || (site.isUnesco ? "UNESCO World Heritage" : "Sacred Monument");

    return `
      <a href="states/${slug}.html?site=${encodeURIComponent(site.id)}" class="slider-card" data-site="${site.id}" title="Explore ${site.name} in ${stateName}">
        <div class="slider-card-media">
          <img src="${site.imageUrl || ''}" alt="${site.name}" class="slider-card-img" loading="lazy" onerror="handleImageError(this)">
          ${site.isUnesco ? '<span class="slider-card-badge-top-left">🏛️ UNESCO</span>' : '<span class="slider-card-badge-top-left">📍 Heritage</span>'}
          <span class="slider-card-badge-top-right">⭐ ${site.rating || 4.8}</span>
          <span class="slider-card-badge-bottom-left">📍 ${stateName}</span>
        </div>
        <div class="slider-card-body">
          <h3 class="slider-card-title">${site.name}</h3>
          <div class="slider-card-category">${categoryName}</div>
          <p class="slider-card-desc">${desc}</p>
          <div class="slider-card-footer">
            <span class="slider-card-cta">Explore State Portal ➔</span>
            <span class="slider-card-360-pill">🌐 360° Tour</span>
          </div>
        </div>
      </a>
    `;
  }).join("");

  // Generate pagination indicator dots
  if (dotsRow) {
    const dotCount = Math.min(featuredSites.length, 8);
    dotsRow.innerHTML = Array.from({ length: dotCount }).map((_, i) => 
      `<button class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}" title="Slide ${i + 1}"></button>`
    ).join("");

    const dots = dotsRow.querySelectorAll(".slider-dot");
    dots.forEach(dot => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        const index = parseInt(dot.getAttribute("data-index"), 10);
        const cardWidth = 325;
        if (trackContainer) {
          trackContainer.scrollTo({ left: index * cardWidth, behavior: "smooth" });
        }
      });
    });
  }

  // Scroll arrow controls
  const scrollStep = 330;
  if (prevBtn && trackContainer) {
    prevBtn.addEventListener("click", () => {
      trackContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
  }
  if (nextBtn && trackContainer) {
    nextBtn.addEventListener("click", () => {
      trackContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
    });
  }

  // Autoplay slideshow with smooth wrap-around
  let isAutoPlaying = true;
  let autoPlayTimer = setInterval(() => {
    if (!isAutoPlaying || !trackContainer) return;
    if (trackContainer.scrollLeft + trackContainer.clientWidth >= trackContainer.scrollWidth - 20) {
      trackContainer.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      trackContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
    }
  }, 3800);

  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      isAutoPlaying = !isAutoPlaying;
      playPauseBtn.textContent = isAutoPlaying ? "⏸️" : "▶️";
      playPauseBtn.title = isAutoPlaying ? "Pause Slideshow" : "Play Slideshow";
    });
  }

  // Pause on hover
  if (trackContainer) {
    trackContainer.addEventListener("mouseenter", () => { isAutoPlaying = false; });
    trackContainer.addEventListener("mouseleave", () => { 
      if (playPauseBtn && playPauseBtn.textContent === "⏸️") {
        isAutoPlaying = true;
      }
    });

    // Update active dot on scroll
    trackContainer.addEventListener("scroll", () => {
      if (!dotsRow) return;
      const dots = dotsRow.querySelectorAll(".slider-dot");
      const activeIdx = Math.min(Math.round(trackContainer.scrollLeft / scrollStep), dots.length - 1);
      dots.forEach((d, i) => {
        if (i === activeIdx) d.classList.add("active");
        else d.classList.remove("active");
      });
    }, { passive: true });
  }
}
