// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcD8yUzHrwTpp1o4jIdW2n24mDXmv58HA",
  authDomain: "library-management-2922f.firebaseapp.com",
  projectId: "library-management-2922f",
  storageBucket: "library-management-2922f.firebasestorage.app",
  messagingSenderId: "805883613456",
  appId: "1:805883613456:web:58a3f9c5a64ae3867e9595",
  measurementId: "G-MQVK4PHY1J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
