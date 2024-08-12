import {
    signInWithRedirect,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth"

import { auth } from "../core/config/firebase.config"

import {
    COLECTIONS,
    getDocuments,
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

    const res = await setDocument(COLECTIONS.USERS, userDB, user.uid);

    return res;
};


export const getUserById = async (id) => {
    const res = await getDocumentById(id, COLECTIONS.USERS);
    return res;
}


export const getAllEvents = async () => {
    const res = await getDocuments(COLECTIONS.EVENTS)
    return res;
}