import { auth } from '@/shared/api/firebase/config';
import type { User } from 'firebase/auth';

export const getCurrentUser = async (): Promise<User | null> => {
  await auth.authStateReady(); // Ждём инициализации состояния
  return auth.currentUser; // Теперь результат точен
};