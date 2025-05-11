import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import type { FirebaseError } from "firebase/app";
import type { AuthResponse } from "../../types";

export const createUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Пользователь создан:", userCredential.user.uid);
    return { user: userCredential.user, error: null };
  } catch (error) {
    //   if (error.code === "auth/email-already-in-use") {
    //     alert("Email уже занят");

    //   }
    return { user: null, error: error as FirebaseError };
  }
};
