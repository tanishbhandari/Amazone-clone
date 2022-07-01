// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPSAUQTu2RvZxo9WndAOOOd2xiuAtGXxQ",
  authDomain: "clone-79039.firebaseapp.com",
  projectId: "clone-79039",
  storageBucket: "clone-79039.appspot.com",
  messagingSenderId: "396243300816",
  appId: "1:396243300816:web:3873e48cf2e799fa0b89d5",
  measurementId: "G-MM0JSR4YZR"
};

// const db = firebaseApp.firestore();
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };