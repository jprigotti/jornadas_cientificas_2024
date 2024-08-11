import { db } from "../config/firebase.config";
import {
    collection,
    addDoc,
    getDocs,
    setDoc,
    doc,
    getDoc,
} from "firebase/firestore";



/**CREATE_DOCUMENT 
 * recibe como argumento el nombre de la colection y retorna todos los documentos
*/
export const createDocument = async (name, data) => {
    const refDoc = await addDoc(collection(db, name), data);
    return refDoc;
};


export const DOCUMENTS = {
    USERS: "users",
};