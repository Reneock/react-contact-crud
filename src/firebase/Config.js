import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ5O1v7kw_iuVi2_qSC5yjLd4Ux3exibg",
  authDomain: "react-contacts-ebf68.firebaseapp.com",
  projectId: "react-contacts-ebf68",
  storageBucket: "react-contacts-ebf68.appspot.com",
  messagingSenderId: "11530166797",
  appId: "1:11530166797:web:a6e4c037052f65c3102b44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);