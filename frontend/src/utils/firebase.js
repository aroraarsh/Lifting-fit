// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2UhJBTKiBfIw7uMmtQxhB3STIt31_I84",
  authDomain: "liftingfit-cbd2e.firebaseapp.com",
  projectId: "liftingfit-cbd2e",
  storageBucket: "liftingfit-cbd2e.appspot.com",
  messagingSenderId: "882407689640",
  appId: "1:882407689640:web:f1daf6101e74f41ac9a19d",
  measurementId: "G-QYVX6WXN1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 