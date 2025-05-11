export * from './auth/handlers/handleAuthErrors'

export { getUserData } from "./firestore/getUserData";
export { saveUserData } from "./firestore/saveUserData";

export { getCurrentUser } from "./auth/operations/getCurrentUser";
export { createUser } from "./auth/operations/createUser";
export { loginWithEmail } from "./auth/operations/loginWithEmail";
export { logout } from "./auth/operations/logout";

export { AUTH_ERRORS } from "./auth/constants";