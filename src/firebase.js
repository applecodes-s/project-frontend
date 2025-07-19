// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj2w75yEpkeNkP9QmDWJ5D0SQkzhJXip4",
  authDomain: "peer-project-hub-58994.firebaseapp.com",
  projectId: "peer-project-hub-58994",
  storageBucket: "peer-project-hub-58994.firebasestorage.app",
  messagingSenderId: "552930536716",
  appId: "1:552930536716:web:fe27c22d82daec153fad29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
