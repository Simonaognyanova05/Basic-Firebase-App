import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0qTM3qERxUJyGkkDsQ9jhfIjNxjuUN9Y",
  authDomain: "basic-app-2.firebaseapp.com",
  projectId: "basic-app-2",
  storageBucket: "basic-app-2.firebasestorage.app",
  messagingSenderId: "1023831068639",
  appId: "1:1023831068639:web:045649d2118cbdee3c3e6a",
  measurementId: "G-LYRJELZGR3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);