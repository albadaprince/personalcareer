// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUJzWOYlbZ6tyT3VButwdqTGpVMlW52qQ",
  authDomain: "private-4102b.firebaseapp.com",
  projectId: "private-4102b",
  storageBucket: "private-4102b.firebasestorage.app",
  messagingSenderId: "668082070392",
  appId: "1:668082070392:web:ede2ee1f4fe005f19a1e8d",
  measurementId: "G-8CQX01GV1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);