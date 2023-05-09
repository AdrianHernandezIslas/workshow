// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh_9h-aDEVU6sCzd2ihoS82PRAOrjvNlM",
  authDomain: "coderhouse-ecommerce-002.firebaseapp.com",
  projectId: "coderhouse-ecommerce-002",
  storageBucket: "coderhouse-ecommerce-002.appspot.com",
  messagingSenderId: "1047137414297",
  appId: "1:1047137414297:web:8caa24ba5d1f1205d01c08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;