import { auth } from '@/shared/api/firebase/config';
import type { User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


type UseAuthResult = {
    user: User | null | undefined
    isLoading: boolean
    error: Error | undefined
}

export const useAuth = (): UseAuthResult => {
  const [user, isLoading, error] = useAuthState(auth);

  return { user, isLoading, error };
};