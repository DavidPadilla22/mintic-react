
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHlfRDEPeQYeZHtnKCB_OkByGipdMpYvo",
  authDomain: "proyecto-397bf.firebaseapp.com",
  projectId: "proyecto-397bf",
  storageBucket: "proyecto-397bf.firebasestorage.app",
  messagingSenderId: "157867137102",
  appId: "1:157867137102:web:8320df2f7107462b5e8b1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

//Firestore
const db = getFirestore(app);

export {auth, googleProvider, db, signOut };