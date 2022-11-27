// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHt0pooaK8HGdxfePaoEOX3zElFbt2YGA",
  authDomain: "trade-buy-sell.firebaseapp.com",
  projectId: "trade-buy-sell",
  storageBucket: "trade-buy-sell.appspot.com",
  messagingSenderId: "25766584246",
  appId: "1:25766584246:web:641fc0492cf823894cab17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;