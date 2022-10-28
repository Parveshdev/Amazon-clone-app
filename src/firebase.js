import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBg3TliKpIurSKnkdntD6n2trRSfeU7g7I",
  authDomain: "clone-1c2a7.firebaseapp.com",
  projectId: "clone-1c2a7",
  storageBucket: "clone-1c2a7.appspot.com",
  messagingSenderId: "78397121315",
  appId: "1:78397121315:web:199f20f2292275fd1de296",
  measurementId: "G-M9CG46FE31",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
