// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeCy3uQ-_OIS5B2wlXZJot3TOFjUMEGDI",
  authDomain: "fir-fighter-a386d.firebaseapp.com",
  projectId: "fir-fighter-a386d",
  storageBucket: "fir-fighter-a386d.firebasestorage.app",
  messagingSenderId: "643740464508",
  appId: "1:643740464508:web:035461b03356150bba20f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);