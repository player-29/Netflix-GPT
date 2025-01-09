// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbyinkMAj1Ti22Pkt-RZkuWqgfHkpTVEc",
  authDomain: "netflixgpt-779aa.firebaseapp.com",
  projectId: "netflixgpt-779aa",
  storageBucket: "netflixgpt-779aa.firebasestorage.app",
  messagingSenderId: "603038460516",
  appId: "1:603038460516:web:df98579d34ab3dcc588d71",
  measurementId: "G-QK3LQYQ17C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();