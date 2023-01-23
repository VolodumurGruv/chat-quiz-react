import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseInit";

const messageRef = (userUID) => doc(db, "messages", userUID);

export const addMessage = async (userUid, message) => {
	const res = await setDoc(messageRef(userUid), message, { merge: true });
	console.log(res);
};

export const updateMessage = async (userUid, message) => {
	await updateDoc(messageRef(userUid), message);
};

export const getMessage = async (userUID, fn) => {
	onSnapshot(messageRef(userUID), (doc) => fn(doc.data()));
};
