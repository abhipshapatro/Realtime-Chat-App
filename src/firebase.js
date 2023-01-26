
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIzBrOSSF718Mh9fpF7HBJF7XfE8ySAoo",
  authDomain: "chat-app-edd37.firebaseapp.com",
  projectId: "chat-app-edd37",
  storageBucket: "chat-app-edd37.appspot.com",
  messagingSenderId: "350586923796",
  appId: "1:350586923796:web:35b8b478434eaee81f3001"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();