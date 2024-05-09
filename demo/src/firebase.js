// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjpFH5wF3zuiMmSqy3ewVknpv8GcQkc-U",
  authDomain: "auth-project-44ec2.firebaseapp.com",
  projectId: "auth-project-44ec2",
  storageBucket: "auth-project-44ec2.appspot.com",
  messagingSenderId: "737566790316",
  appId: "1:737566790316:web:982e12ebf1b5d75e9b8509",
  measurementId: "G-KJX2LEVWR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);