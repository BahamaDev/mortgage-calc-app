// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzeeVj9o34gYJDqT00UefJnQCxHmQt5Q8",
  authDomain: "mortgage-cal-9ca72.firebaseapp.com",
  projectId: "mortgage-cal-9ca72",
  storageBucket: "mortgage-cal-9ca72.appspot.com",
  messagingSenderId: "162926311193",
  appId: "1:162926311193:web:b42ea7c68d95fa5d047788",
  measurementId: "G-2QNPK50TZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
