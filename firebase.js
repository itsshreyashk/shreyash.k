// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiEZejbI7ViLE_IoYhwMziJ9iFAMdzFp0",
  authDomain: "shreyash-kumar.firebaseapp.com",
  projectId: "shreyash-kumar",
  storageBucket: "shreyash-kumar.appspot.com",
  messagingSenderId: "714983405498",
  appId: "1:714983405498:web:097f2bcac784fe200bcf83",
  measurementId: "G-6HBF15T1M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);