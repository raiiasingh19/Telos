// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "telos-400412.firebaseapp.com",
  projectId: "telos-400412",
  storageBucket: "telos-400412.appspot.com",
  messagingSenderId: "700787076231",
  appId: "1:700787076231:web:b130885d63d9b950a61c22",
  measurementId: "G-5B1BP5CVJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);