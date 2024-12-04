// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKjKnn6S4-xe5cO4kRpi3DqGbJXndgLUU",
  authDomain: "coticorn-f3166.firebaseapp.com",
  projectId: "coticorn-f3166",
  storageBucket: "coticorn-f3166.firebasestorage.app",
  messagingSenderId: "202409286760",
  appId: "1:202409286760:web:3ec81108820a0f63f3afdd",
  measurementId: "G-6KYDBCJH5V"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE = getFirestore(FIREBASE_APP);