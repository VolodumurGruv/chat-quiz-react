import {
	arrayUnion,
	doc,
	getDoc,
	onSnapshot,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "./firebaseInit";

const messageRef = (userUID) => doc(db, "messages", userUID);

export const addMessage = async (userUid, message) => {
	await setDoc(messageRef(userUid), message, { merge: true });
};

export const updateMessage = async (userUid, message) => {
	await updateDoc(messageRef(userUid), { message: arrayUnion(message) });
};

export const getMessage = async (userUID, fn) => {
	onSnapshot(messageRef(userUID), (doc) => fn(doc.data()));
};
