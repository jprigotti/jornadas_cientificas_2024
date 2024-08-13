import { db } from "../config/firebase.config";
import {
    collection,
    addDoc,
    getDocs,
    setDoc,
    doc,
    getDoc,
} from "firebase/firestore";


export const COLLECTIONS = {
    USERS: "users",
    EVENTS: "events",
    REGISTRATION: "registration"
};

export const DOCUMENTS = {
    JORNADAS2024: "jornadas_cientificas_2024"
}


/**GET_DOCUMENTS 
 * recibe como argumento el nombre de la collection y retorna todos los documentos
*/
export const getDocuments = async (name) => {
    const querySnapshot = await getDocs(collection(db, name));
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data
};

/*CREATE_DOCUMENT 
* recibe como argumento el nombre de la collection y retorna todos los documentos
*/
export const createDocument = async (name, data) => {
    const refDoc = await addDoc(collection(db, name), data);
    return refDoc;
};

/*SET_DOCUMENT
* recibe como argumento el nombre de la colection y retorna todos los documentos
*/
export const setDocument = async (name, data, id) => {
    const response = {
        status: null,
        error: null
    }

    try {
        await setDoc(doc(db, name, id), data)
        response.status = true;

    } catch (error) {
        response.error = error;
        response.status = false;
    }

    return response;
}

/*GET_DOCUMENT_BY_ID
* recibe como argumento el nombre de la collection y el id del documento
*/
export const getDocumentById = async (id, name) => {
    const docRef = doc(db, name, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
};

/*GET_DOCUMENTS_BY_ID_FROM_SUBCOLLECTION
* recibe como argumentos:
parentCollection and parentDocId
childCollection and childDoc Id
*/
export const getDocumentByIdFromSubcollection = async (getData) => {
    const response = {
        status: null,
        error: null
    }

    try {
        // Construct the path to the specific user's registration document within the event
        const path = `${getData.parentCollection}/${getData.parentDocId}/${getData.childCollection}/${getData.childDocId}`;
        const childDocRef = doc(db, path);

        // Retrieve the document
        const childDoc = await getDoc(childDocRef)

        if (childDoc.exists()) {
            response.status = true;
            response.data = { id: childDoc.id, ...childDoc.data() }
        } else {
            response.status = true;
            response.data = null
        }
    } catch (error) {
        response.status = false;
        response.error = error
    }

    return response;
}



export const addSubcollectionDocument = async (parentCollection, docId, childSubcollection, docData) => {
    const response = {
        status: null,
        error: null
    }

    try {
        // Reference to the event document
        const parentDocRef = doc(db, parentCollection, docId);

        // Reference to the 'registrations' subcollection within the event document
        const childCollectionReference = collection(parentDocRef, childSubcollection);

        // Create a new document in the 'registrations' subcollection
        await addDoc(childCollectionReference, docData)

        response.status = true;
    } catch (error) {
        response.status = false;
        response.error = error;
    }

    return response;
}

export const setSubcollectionDocument = async (registrationData) => {
    const response = {
        status: null,
        error: null
    }

    try {
        // Get a reference to parents collection
        const path = `${registrationData.parentCollection}/${registrationData.parentDocId}/${registrationData.childCollection}`;
        const parentDocRef = collection(db, path);

        // Create a document reference with a custom ID
        const childDocRef = doc(parentDocRef, registrationData.childDocId)

        // Set the data for the document
        await setDoc(childDocRef, registrationData.persistData);
        response.status = true;
    } catch (error) {
        response.status = false;
        response.error = error;
    }

    return response;
}