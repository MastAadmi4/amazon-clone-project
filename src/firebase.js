// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZAm7QF9odUUxJ_mc-n3XUai-6F80XWH0",
  authDomain: "clone-fbe9f.firebaseapp.com",
  projectId: "clone-fbe9f",
  storageBucket: "clone-fbe9f.appspot.com",
  messagingSenderId: "733339341197",
  appId: "1:733339341197:web:5b49fe3755ff6ce124edc4",
  measurementId: "G-KSEWGDW4SV",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
