// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxvpOPJEeGHmBW4gmNGpy9Fu0V78x0y9w",
  authDomain: "task-management-67ee1.firebaseapp.com",
  projectId: "task-management-67ee1",
  storageBucket: "task-management-67ee1.appspot.com",
  messagingSenderId: "180482739329",
  appId: "1:180482739329:web:4fd5d913dc5c79761cd180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;