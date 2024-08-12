import { db } from "../config/firebase.config";
import {
    collection,
    addDoc,
    getDocs,
    setDoc,
    doc,
    getDoc,
} from "firebase/firestore";


export const COLECTIONS = {
    USERS: "users",
    EVENTS: "events"
};

export const DOCUMENTS = {
    JORNADAS2024: "jornadas_cientificas_2024"
}


/**GET_DOCUMENTS 
 * recibe como argumento el nombre de la colection y retorna todos los documentos
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
* recibe como argumento el nombre de la colection y retorna todos los documentos
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

/*GET_DOCUMENTS_BY_ID
* recibe como argumento el nombre de la colection y el id del documento
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