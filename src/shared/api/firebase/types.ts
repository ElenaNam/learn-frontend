import type { FirebaseError } from "firebase/app";
import type { User } from "firebase/auth";

export type AuthResponse = {
    user: User | null;
    error: FirebaseError | null;
};