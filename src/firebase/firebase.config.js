// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfdszUXvFPC9aQOv0cF3VORNKCxhCmMtg",
  authDomain: "coderhouse-ecomerce-001.firebaseapp.com",
  projectId: "coderhouse-ecomerce-001",
  storageBucket: "coderhouse-ecomerce-001.appspot.com",
  messagingSenderId: "1005723818118",
  appId: "1:1005723818118:web:e84446e2a9920463afd907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;