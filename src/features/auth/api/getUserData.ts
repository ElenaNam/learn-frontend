import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

// Чтение данных пользователя
export const getUserData = async (userId: string) => {
  const docSnap = await getDoc(doc(db, "users", userId));
  return docSnap.exists() ? docSnap.data() : null;
};