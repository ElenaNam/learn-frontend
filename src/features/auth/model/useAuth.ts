import { setIsLoggedInAC } from '@/app/app-slice';
import { useAppDispatch } from '@/common/hooks';
import { auth } from '@/shared/api/firebase/config';
import { handleAuthErrors } from '@/utils';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useState } from 'react';


export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      
      if (methods.length > 0) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      
      dispatch(setIsLoggedInAC({ isLoggedIn: true }));
      return { success: true, error: null};
    } catch (error) {
      // Обрабатываем только специфичные ошибки Firebase
      if (error instanceof Error && 'code' in error) {
        const message = handleAuthErrors(error);
        return { success: false, error: message };
      }
      return { success: false, error: 'Неизвестная ошибка' };
    } finally {
      setIsLoading(false); // Сбрасываем состояние загрузки в любом случае
    }
  }, [dispatch]);

  return { handleAuth, isLoading };
};