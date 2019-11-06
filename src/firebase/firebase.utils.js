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

// export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
