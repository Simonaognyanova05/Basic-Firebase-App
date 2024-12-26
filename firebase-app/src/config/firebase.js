import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwtt2n0xHsGI-E6jFW95UGHXtM_4M0zhM",
  authDomain: "basic-app-1e303.firebaseapp.com",
  projectId: "basic-app-1e303",
  storageBucket: "basic-app-1e303.firebasestorage.app",
  messagingSenderId: "251150378234",
  appId: "1:251150378234:web:a944ca8d6002cfb349d543"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);