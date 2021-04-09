import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmPe0viUJYwgA-7I2u967LmWmYJ4cmzM8",
    authDomain: "blog-5e639.firebaseapp.com",
    projectId: "blog-5e639",
    storageBucket: "blog-5e639.appspot.com",
    messagingSenderId: "971445026110",
    appId: "1:971445026110:web:437dd4fa5cd5282408c06f"
  };

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };

