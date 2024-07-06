// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjZ2AvcI1sXP1ts9iZKDvqJtAXKjymwl4",
  authDomain: "netflixgpt-71de1.firebaseapp.com",
  projectId: "netflixgpt-71de1",
  storageBucket: "netflixgpt-71de1.appspot.com",
  messagingSenderId: "844468900254",
  appId: "1:844468900254:web:68fcf3aa67cc4dc36b868f",
  measurementId: "G-7CXV42HVP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();