import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBWxMdMw23IPCImIevHirhtLGUxS7VMDL8",
  authDomain: "olxclone-a4451.firebaseapp.com",
  projectId: "olxclone-a4451",
  storageBucket: "olxclone-a4451.appspot.com",
  messagingSenderId: "157186011719",
  appId: "1:157186011719:web:a5bf993b6a08534964f762",
  measurementId: "G-82BXJVZM17"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(FirebaseApp);
export const db = getFirestore(FirebaseApp);
export const storage = getStorage();

