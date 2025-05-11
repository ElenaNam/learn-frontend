import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

// Запись данных пользователя
export const saveUserData = async (userId: string, data: Date) => {
  await setDoc(doc(db, "users", userId), data);
};