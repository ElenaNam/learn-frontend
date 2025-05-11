import { AUTH_ERRORS } from '../constants';

export const handleAuthErrors = (error: unknown): string[] => {
  if (!(error instanceof Error)) return ['Неизвестная ошибка'];
  
  const errors: string[] = [];
  
  if ('code' in error) {
    const firebaseError = error as { code: string };
    Object.entries(AUTH_ERRORS).forEach(([errorCode, message]) => {
      if (firebaseError.code.includes(errorCode)) {
        errors.push(message);
      }
    });
  }
  
  return errors.length > 0 ? errors : [error.message];
};