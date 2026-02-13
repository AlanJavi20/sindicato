
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAJpPINfLDtl8pmNtsUDXaG6AXstRMYT7w",
    authDomain: "sindicato-web-6c811.firebaseapp.com",
    projectId: "sindicato-web-6c811",
    storageBucket: "sindicato-web-6c811.firebasestorage.app",
    messagingSenderId: "996138935721",
    appId: "1:996138935721:web:de13b10dd2ec9fef63d0b8",
    measurementId: "G-BVW96PEKH6"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// The user's database is named "leads" based on the console URL, not the default "(default)"
export const db = getFirestore(app, "leads");

let analytics;
// Initialize analytics only on client side and if supported
if (typeof window !== "undefined") {
    isSupported().then((yes) => {
        if (yes) {
            analytics = getAnalytics(app);
        }
    });
}

export { analytics };
