  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAleZBBUbRcuxR5snNFgUHJQI1loYCE2eE",
    authDomain: "portfolio-cfa12.firebaseapp.com",
    projectId: "portfolio-cfa12",
    storageBucket: "portfolio-cfa12.firebasestorage.app",
    messagingSenderId: "38153401981",
    appId: "1:38153401981:web:e5f5496a46ed771ad82314"
  };

    // Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
export const db = getFirestore(fbApp);