// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, type Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Syg-E4CWg3bGAUj0hPYzQl_CnqEHRaQ",
  authDomain: "llm-law-stanford-frontend.firebaseapp.com",
  projectId: "llm-law-stanford-frontend",
  storageBucket: "llm-law-stanford-frontend.appspot.com",
  messagingSenderId: "278684728814",
  appId: "1:278684728814:web:6bd1df7747dfec993be2ff",
  measurementId: "G-H06833JXRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db: Firestore = getFirestore(app);