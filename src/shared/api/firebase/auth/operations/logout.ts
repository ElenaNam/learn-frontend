import { auth } from '@/shared/api/firebase/config';

export const logout = async (): Promise<void> => {
  await auth.signOut();
};