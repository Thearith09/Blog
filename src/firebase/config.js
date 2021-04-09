import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfQPFZ2N5nyMWhq8a2LorZRjWclfWzV6E",
    authDomain: "vue-firebase-sites-e7ad6.firebaseapp.com",
    projectId: "vue-firebase-sites-e7ad6",
    storageBucket: "vue-firebase-sites-e7ad6.appspot.com",
    messagingSenderId: "711542868237",
    appId: "1:711542868237:web:8efcd011ea6c716ebb4844"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };

