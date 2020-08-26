import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyAJ9F7rUBjdoRRFSCMUpkt31byZFdBYmu8",
  authDomain: "miapp-ab9fb.firebaseapp.com",
  databaseURL: "https://miapp-ab9fb.firebaseio.com",
  projectId: "miapp-ab9fb",
  storageBucket: "miapp-ab9fb.appspot.com",
  messagingSenderId: "229339675454",
  appId: "1:229339675454:web:0361d3f72f251911bb8a6f",
  measurementId: "G-ECD0L66G8J",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
