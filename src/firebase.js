import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPpOAXQ-6aHx67qSfyx5AlJu1CgR1HhbQ",
  authDomain: "blog-b67c8.firebaseapp.com",
  projectId: "blog-b67c8",
  storageBucket: "blog-b67c8.appspot.com",
  messagingSenderId: "923203382792",
  appId: "1:923203382792:web:dac9b592eed849adb3ebbd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db };