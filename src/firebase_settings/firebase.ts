// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCya3hB0vRloEa4s6yIquyMOn97s4DiSVU",
  authDomain: "fir-login-734a8.firebaseapp.com",
  projectId: "fir-login-734a8",
  storageBucket: "fir-login-734a8.appspot.com",
  messagingSenderId: "923546045306",
  appId: "1:923546045306:web:0ea84463b601563b55e4c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();