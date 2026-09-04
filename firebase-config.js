/**
 * Firebase Firestore Configuration & Data Service
 * 
 * You can replace the placeholder values below with your Firebase project credentials
 * from the Firebase Console (Project Settings > General > Your apps > Web app).
 */

const firebaseConfig = {
  apiKey: "AIzaSyDemoPlaceholderKeyForIndianHeritage",
  authDomain: "indian-heritage-culture.firebaseapp.com",
  projectId: "indian-heritage-culture",
  storageBucket: "indian-heritage-culture.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

let db = null;
let isFirebaseConnected = false;

// Initialize Firebase if library is available
try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps || firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    // Test if real project is configured
    if (!firebaseConfig.apiKey.includes("DemoPlaceholder")) {
      isFirebaseConnected = true;
      console.log("⚡ Firebase initialized successfully with Firestore database.");
    } else {
      console.info("ℹ️ Running in Local Mode with rich offline Indian Heritage dataset. (To connect real Firebase, add your keys in firebase-config.js)");
    }
  }
} catch (error) {
  console.warn("⚠️ Firebase initialization notice:", error.message);
  isFirebaseConnected = false;
}

/**
 * Data Service: Fetch sites for a specific state
 * Checks Firestore first if connected; otherwise uses local dataset.
 */
async function fetchHeritageSites(stateId) {
  if (isFirebaseConnected && db) {
    try {
      const snapshot = await db.collection("heritage_sites")
        .where("stateId", "==", stateId)
        .get();

      if (!snapshot.empty) {
        const sites = [];
        snapshot.forEach(doc => {
          sites.push({ id: doc.id, ...doc.data() });
        });
        return sites;
      }
    } catch (err) {
      console.warn("Firestore query failed, falling back to local dataset:", err);
    }
  }

  // Local fallback
  return getSitesByState(stateId);
}

/**
 * Seed Firestore with local dataset
 */
async function seedFirestore() {
  if (!isFirebaseConnected || !db) {
    alert("Please configure valid Firebase project credentials in firebase-config.js before syncing.");
    return;
  }

  try {
    const batch = db.batch();
    HERITAGE_SITES.forEach(site => {
      const docRef = db.collection("heritage_sites").doc(site.id);
      batch.set(docRef, site);
    });
    await batch.commit();
    alert("✅ Successfully synced Indian Heritage sites to your Firestore database!");
  } catch (err) {
    console.error("Error syncing to Firestore:", err);
    alert("Sync error: " + err.message);
  }
}
