// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoR1mhHaRsM9BQneml-2h_tq1OkZSPy_w",
  authDomain: "travel-guru-240fa.firebaseapp.com",
  projectId: "travel-guru-240fa",
  storageBucket: "travel-guru-240fa.appspot.com",
  messagingSenderId: "180222544027",
  appId: "1:180222544027:web:24e2a06272c4db4fec9e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;