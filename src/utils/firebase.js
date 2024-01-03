// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0sXKApaySf5JY5UQywfTUO4B5F2b5vC0",
  authDomain: "netflixgpt-99e51.firebaseapp.com",
  projectId: "netflixgpt-99e51",
  storageBucket: "netflixgpt-99e51.appspot.com",
  messagingSenderId: "63943865568",
  appId: "1:63943865568:web:c9d2a60f0a6ee95d5e4c85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
