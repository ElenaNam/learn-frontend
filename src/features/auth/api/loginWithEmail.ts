import { getAuth, signInWithEmailAndPassword, type User } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const auth = getAuth();

type AuthResponse = {
  user: User | null;
  error: FirebaseError | null;
};

// Вход по email и паролю
export const loginWithEmail = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error as FirebaseError };
  }
};