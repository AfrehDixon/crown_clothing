import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDS7CpJm6qdWdrsTqelXK0wVJp_25o15VM",
  authDomain: "dixi-s-clothing.firebaseapp.com",
  projectId: "dixi-s-clothing",
  storageBucket: "dixi-s-clothing.appspot.com",
  messagingSenderId: "53387229924",
  appId: "1:53387229924:web:3bce7dfef75234582b0af1",
  measurementId: "G-E66QH228B9",
};

// Initialize Firebase

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
