// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvFdvJz_zYVnfGl7SnRQvZZvNPv7NXoj8",
  authDomain: "final-project-96f48.firebaseapp.com",
  projectId: "final-project-96f48",
  storageBucket: "final-project-96f48.firebasestorage.app",
  messagingSenderId: "643081986088",
  appId: "1:643081986088:web:19aae8ce9aa37ebb6b951d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);