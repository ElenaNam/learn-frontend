import { setIsLoggedInAC } from "@/app/app-slice";
import { useAppDispatch } from "@/common/hooks";
import { useAuth } from "@/features/auth/model/useAuth";
import { loginWithEmail, logout } from "../../api";

export const Login = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch()

  const handleClick = () => {
    //console.log(user);
    if(user) {
      logout()
      dispatch(setIsLoggedInAC({isLoggedIn: false}))
    } else {
      loginWithEmail('email', 'password')
      dispatch(setIsLoggedInAC({isLoggedIn: true}))
    }

  };
  return (
    <div>
      <button onClick={handleClick}>{user ? "Выйти" : "Войти"}</button>
    </div>
  );
};
