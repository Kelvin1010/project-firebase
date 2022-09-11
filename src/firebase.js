import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCT_Ffu-_YnNMsW1lR4YCmzfOchLSYgvxU",
  authDomain: "admin-tutorial-d6132.firebaseapp.com",
  projectId: "admin-tutorial-d6132",
  storageBucket: "admin-tutorial-d6132.appspot.com",
  messagingSenderId: "682699253762",
  appId: "1:682699253762:web:63b06376d8890c31f61f1b",
  measurementId: "G-DYPLNV9YWF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);
export const storage = getStorage(app)