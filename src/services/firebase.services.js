import {
    signInWithRedirect,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth"

import { auth } from "../core/config/firebase.config"

import {
    DOCUMENTS,
    createDocument,
} from "../core/db/firestore.db";


// Authentication Functions
export const signUpWithEmail = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
};

export const signInWithEmail = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
};

export const signOut = async () => {
    await auth.signOut();
};



// Persistance Functions
export const saveUserInDB = async (user) => {
    const userDB = {
      uid: user.uid,
      name: user.name,
      lastName: user.lastName,
      cell: user.cell,
      email: user.email,
    };
  
    const res = await createDocument(DOCUMENTS.USERS, userDB);
  
    return res;
  };