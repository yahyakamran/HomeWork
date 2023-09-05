import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "648829707179",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-P4F0YWF53K",
};

export const auth = getAuth(app);

const app = initializeApp(firebaseConfig);
