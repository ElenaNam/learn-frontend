//import type { FirebaseError } from 'firebase/app';
import { AUTH_ERRORS } from '../constants';

// export const handleAuthErrors = (error: unknown): string[] => {
//   if (!(error instanceof Error)) return ['Неизвестная ошибка'];
  
//   const errors: string[] = [];
  
//   if ('code' in error) {
//     const firebaseError = error as { code: string };
//     Object.entries(AUTH_ERRORS).forEach(([errorCode, message]) => {
//       if (firebaseError.code.includes(errorCode)) {
//         errors.push(message);
//       }
//     });
//   }
  
//   return errors.length > 0 ? errors : [error.message];
// };

// export const handleAuthErrors = (error: FirebaseError) => {
//   return AUTH_ERRORS[error.code as keyof typeof AUTH_ERRORS] || error.message;
// };

export const handleAuthErrors = (error: unknown): string[] => {
  if (!(error instanceof Error)) return ['Неизвестная ошибка'];
  
  // Для FirebaseError с кодом
  if ('code' in error) {
    const firebaseError = error as { code: string };
    const message = AUTH_ERRORS[firebaseError.code as keyof typeof AUTH_ERRORS];
    if (message) return [message];
  }
  
  // Для других ошибок
  return [error.message];
};