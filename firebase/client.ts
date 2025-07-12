import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQMVGJSmQNxk16dx1LWiu24K8cGn9BpsE",
  authDomain: "vaderai.firebaseapp.com",
  projectId: "vaderai",
  storageBucket: "vaderai.firebasestorage.app",
  messagingSenderId: "852457917952",
  appId: "1:852457917952:web:3901befc24750adf7552e5",
  measurementId: "G-FS8Q1EJSQ7"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);