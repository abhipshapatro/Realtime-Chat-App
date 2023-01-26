
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDTJ-ByEgLfKlU8wZjqlU_rfF-xYM5B6-Q",
    authDomain: "chat-app-a945e.firebaseapp.com",
    projectId: "chat-app-a945e",
    storageBucket: "chat-app-a945e.appspot.com",
    messagingSenderId: "78535008402",
    appId: "1:78535008402:web:49cfd248a4f5169cbd064b"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();