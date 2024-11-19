// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiSH3kX2MXYczud69W3NTa53-WFNyZ8-4",
  authDomain: "winter-kindness-hub.firebaseapp.com",
  projectId: "winter-kindness-hub",
  storageBucket: "winter-kindness-hub.firebasestorage.app",
  messagingSenderId: "526038799162",
  appId: "1:526038799162:web:61364e0cedd2d925a13603"
};


const app = initializeApp(firebaseConfig);

export default app;