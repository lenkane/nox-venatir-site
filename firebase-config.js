// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWJf_pF47snQ-Wpb1LwpA0NrUJEUSjJiQ",
  authDomain: "nox-venatir.firebaseapp.com",
  projectId: "nox-venatir",
  storageBucket: "nox-venatir.firebasestorage.app",
  messagingSenderId: "919967958333",
  appId: "1:919967958333:web:7324699dd96e1fd5c9b154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
