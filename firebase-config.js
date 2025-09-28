// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCWJf_pF47snQ-Wpb1LwpA0NrUJEUSjJiQ",
  authDomain: "nox-venatir.firebaseapp.com",
  projectId: "nox-venatir",
  storageBucket: "nox-venatir.firebasestorage.app",
  messagingSenderId: "919967958333",
  appId: "1:919967958333:web:7324699dd96e1fd5c9b154"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();