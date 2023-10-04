
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWFExo6HJuPce-3H8vUFbP2ECIaOxSjRw",
  authDomain: "user-authentication-assignment.firebaseapp.com",
  projectId: "user-authentication-assignment",
  storageBucket: "user-authentication-assignment.appspot.com",
  messagingSenderId: "1006594807302",
  appId: "1:1006594807302:web:70e951a21969054482d587",
  measurementId: "G-FW4SH8RYQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);