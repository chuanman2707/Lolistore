import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEqzoCnN-a_WI5htYTgcSIFTHRMpHSvng",
  authDomain: "lolistore.firebaseapp.com",
  databaseURL: "https://lolistore.firebaseio.com",
  projectId: "lolistore",
  storageBucket: "lolistore.appspot.com",
  messagingSenderId: "815777563468",
  appId: "1:815777563468:web:000737d61d41e3a8e985e9",
  measurementId: "G-9NFS45SMBH"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
