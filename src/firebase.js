import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWfa9w8q0amxUPqD13VnuFy7IEdMupMmM",
  authDomain: "chat-firebase-c1a6d.firebaseapp.com",
  projectId: "chat-firebase-c1a6d",
  storageBucket: "chat-firebase-c1a6d.appspot.com",
  messagingSenderId: "881786153168",
  appId: "1:881786153168:web:02707741bcb92c0e9f96d5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
