// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDG4eV9ubYAXa7Mbmbpgu5noNHDM1alc_c",
  authDomain: "nord-444f2.firebaseapp.com",
  projectId: "nord-444f2",
  storageBucket: "nord-444f2.appspot.com",
  messagingSenderId: "881735986743",
  appId: "1:881735986743:web:b204e44a583ce9c4edd9b2",
  measurementId: "G-PPKZ9YB516"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export default firebaseConfig;