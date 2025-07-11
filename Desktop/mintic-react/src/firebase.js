
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


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

// Exportar auth y provider de google
const auth = getAuth(app);
const googleProvider = GoogleAuthProvider();

export { auth, googleProvider};