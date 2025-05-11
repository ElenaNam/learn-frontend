import { db, auth } from "./config";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";

// Проверка Firestore
export const testFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "test"));
    console.log(
      "Firestore подключен. Данные:",
      querySnapshot.docs.map((doc) => doc.data())
    );
  } catch (error) {
    console.error("Ошибка Firestore:", error);
  }
};

// Проверка Auth (если нужно)
export const testAuth = async (): Promise<void> => {
    const email = import.meta.env.VITE_TEST_USER_EMAIL;
      const password = import.meta.env.VITE_TEST_USER_PASSWORD;

    try {
        // Прямая регистрация без проверки входа
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Успешная регистрация!", userCredential.user);
    
        // Пример записи в Firestore после регистрации
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: email,
          createdAt: new Date()
        });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Ошибка:", error.code, error.message);
      }

};
