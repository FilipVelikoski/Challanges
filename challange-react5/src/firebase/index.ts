// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA33qrr0GlYzPlu-8Uo_io99ItpI5cKcxM",
  authDomain: "my-projectfitnesstracker.firebaseapp.com",
  projectId: "my-projectfitnesstracker",
  storageBucket: "my-projectfitnesstracker.firebasestorage.app",
  messagingSenderId: "800301650793",
  appId: "1:800301650793:web:b132000dc7e959f150e3f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const db = getFirestore(app);

export { auth, googleProvider, db };
