import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyDNq_wVsMJuZCMQYc9noyRBVdYIF9C9AeA",
     authDomain: "ficha-medica-21c86.firebaseapp.com",
     projectId: "ficha-medica-21c86",
     storageBucket: "ficha-medica-21c86.appspot.com",
     messagingSenderId: "480643125708",
     appId: "1:480643125708:web:56781b48f7179f76414d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);
