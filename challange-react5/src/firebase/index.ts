// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: "my-projectfitnesstracker",
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "800301650793",
  appId: import.meta.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const db = getFirestore(app);

export { auth, googleProvider, db };

// Link of the website https://my-projectfitnesstracker.web.app/
