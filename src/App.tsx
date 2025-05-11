import { useEffect, useState } from "react";
import { Routing } from "./common/routing";
//import { testAuth, testFirestore } from './shared/api/firebase/test-connection'
import { getCurrentUser } from "./features/auth/api/getCurrentUser";
import { useAppDispatch } from "./common/hooks";
import { setIsLoggedInAC } from "./app/app-slice";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./App.module.css";
import { useAuth } from "./features/auth/model/useAuth";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const { isLoading } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) return
    getCurrentUser().then((user) => {
      if (user) dispatch(setIsLoggedInAC({ isLoggedIn: true }));
      setIsInitialized(true);
      //testFirestore()
      //testAuth();
    });
  }, [dispatch, isLoading]);

  if (!isInitialized) {
    return (
      <div className={styles.circularProgressContainer}>
        <CircularProgress size={150} thickness={3} />
      </div>
    );
  }

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
