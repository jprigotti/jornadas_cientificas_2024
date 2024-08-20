import {
    signInWithRedirect,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth"

import { auth } from "../core/config/firebase.config"

import {
    COLLECTIONS,
    getDocuments,
    setDocument,
    getDocumentById,
    getDocumentByIdFromSubcollection,
    addSubcollectionDocument,
    setSubcollectionDocument,
    updateDocument,
    updateSubcollectionDocument,
    getDocumentsFromSubcollection
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
        category: user.category,
        role: "user"
    };

    const res = await setDocument(COLLECTIONS.USERS, userDB, user.uid);

    return res;
};


export const getUserById = async (id) => {
    const res = await getDocumentById(id, COLLECTIONS.USERS);
    return res;
}


export const getAllEvents = async () => {
    const res = await getDocuments(COLLECTIONS.EVENTS)
    return res;
}

export const addRegistration = async (userId, eventId) => {
    const docData = {
        userId: userId,
        registrationTime: new Date(),
        status: "registered",
        payment: "pending"
    }

    const res = await addSubcollectionDocument(COLLECTIONS.EVENTS, eventId, COLLECTIONS.REGISTRATION, docData)
    return res
}

export const setRegistration = async (eventId, userId) => {
    const registrationData = {
        parentDocId: eventId,
        childDocId: userId,
        parentCollection: COLLECTIONS.EVENTS,
        childCollection: COLLECTIONS.REGISTRATION,
        persistData: {
            registrationTime: new Date(),
            status: "registered",
            payment: "pending"
        }
    }
    const res = await setSubcollectionDocument(registrationData);
    return res;
}


export const getRegistration = async (eventId, userId) => {
    const data = {
        parentDocId: eventId,
        childDocId: userId,
        parentCollection: COLLECTIONS.EVENTS,
        childCollection: COLLECTIONS.REGISTRATION,
    }
    const res = await getDocumentByIdFromSubcollection(data);
    return res;
}


export const updatePayment = async (eventId, userId) => {
    const data = {
        parentDocId: eventId,
        childDocId: userId,
        parentCollection: COLLECTIONS.EVENTS,
        childCollection: COLLECTIONS.REGISTRATION,
        field: "payment",
        value: "paid"
    }
    const res = await updateSubcollectionDocument(data);
    return res;
}


// Servicio para obtener de fireStore documentos de una subcolección

export const getRegistrationForEvent = async (eventId) => {

    try {

        const res = await getDocumentsFromSubcollection(COLLECTIONS.EVENTS, eventId, COLLECTIONS.REGISTRATION);
        if (res.status) {
            return res.data;
        } else {
            throw new Error(res.error);
        }

    } catch (error) {

        console.error("Error fetching registrations", error);
        
    }
}