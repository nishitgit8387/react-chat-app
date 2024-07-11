import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-fcd80.firebaseapp.com",
  projectId: "reactchatapp-fcd80",
  storageBucket: "reactchatapp-fcd80.appspot.com",
  messagingSenderId: "715737245486",
  appId: "1:715737245486:web:45ca0e5342af13705cfcbf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
