import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA0kKwH5mTvJ18VEln8fgq9Kdij0IHkGqQ",
  authDomain: "clone-b384e.firebaseapp.com",
  projectId: "clone-b384e",
  storageBucket: "clone-b384e.appspot.com",
  messagingSenderId: "876992766028",
  appId: "1:876992766028:web:cfecae286c2cc660c2d4e9",
  measurementId: "G-PMV7MWC6NH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
