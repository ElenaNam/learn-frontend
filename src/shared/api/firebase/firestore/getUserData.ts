import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";


// Чтение данных пользователя
export const getUserData = async (userId: string) => {
  const docSnap = await getDoc(doc(db, "users", userId));
  return docSnap.exists() ? docSnap.data() : null;
};