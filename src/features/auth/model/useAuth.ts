import { setIsLoggedInAC } from '@/app/app-slice';
import { useAppDispatch } from '@/common/hooks';
import { createUser, loginWithEmail } from '@/shared/api/firebase';
import { handleAuthErrors } from '@/utils';
import {  useState } from 'react';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // 1. Пробуем войти
      const loginResponse = await loginWithEmail(email, password);
      
      if (loginResponse.user) {
        dispatch(setIsLoggedInAC({ isLoggedIn: true }));
        return { success: true, error: null };
      }

      // 2. Если пользователь не найден - регистрируем
      if (loginResponse.error?.code === 'auth/user-not-found') {
        const registerResponse = await createUser(email, password);
        
        if (registerResponse.user) {
          dispatch(setIsLoggedInAC({ isLoggedIn: true }));
          return { success: true, error: null };
        }
        
        return { 
          success: false, 
          error: registerResponse.error ? handleAuthErrors(registerResponse.error) : 'Ошибка регистрации' 
        };
      }

      // 3. Обрабатываем другие ошибки входа
      return {
        success: false,
        error: loginResponse.error ? handleAuthErrors(loginResponse.error) : 'Ошибка входа'
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { handleAuth, isLoading };
};