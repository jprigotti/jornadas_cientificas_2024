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
    setDocument,
    getDocumentById
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



// Firestore Functions
export const saveUserInDB = async (user) => {
    const userDB = {
        name: user.name,
        lastName: user.lastName,
        cell: user.cell,
        email: user.email,
    };

    const res = await setDocument(DOCUMENTS.USERS, userDB, user.uid);

    return res;
};


export const getUserById = async (id) => {
    const res = await getDocumentById(id, DOCUMENTS.USERS);
    return res;
}