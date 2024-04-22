import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPRFp1mjpfRa5rP9C5mG-9fq30Rish6pw",
  authDomain: "whatsupp-849b7.firebaseapp.com",
  projectId: "whatsupp-849b7",
  storageBucket: "whatsupp-849b7.appspot.com",
  messagingSenderId: "306060990216",
  appId: "1:306060990216:web:8b69806bedc64d8fc3febd"
};

// Initialize Firebase
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};