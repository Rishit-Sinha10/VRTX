import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyA4qe4Oi1BtFoDS_-sjy7rzChbZdUo0_04",
  authDomain: "firestore-8a746.firebaseapp.com",
  projectId: "firestore-8a746",
  storageBucket: "firestore-8a746.firebasestorage.app",
  messagingSenderId: "653390996882",
  appId: "1:653390996882:web:17605774d71f1e6a194d4b",
  measurementId: "G-1XEHEXSY74"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);