import * as firebase from "firebase";

const firebaseConfig = {
     apiKey: "AIzaSyDNq_wVsMJuZCMQYc9noyRBVdYIF9C9AeA",
     authDomain: "ficha-medica-21c86.firebaseapp.com",
     projectId: "ficha-medica-21c86",
     storageBucket: "ficha-medica-21c86.appspot.com",
     messagingSenderId: "480643125708",
     appId: "1:480643125708:web:56781b48f7179f76414d69"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
     app = firebase.initializeApp(firebaseConfig);
} else {
     app = firebase.app();
}

const auth = firebase.auth();

export { auth };