import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_SOME_KEY_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_SOME_KEY_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_SOME_KEY_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_SOME_KEY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SOME_KEY_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_SOME_KEY_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {app, db, auth};