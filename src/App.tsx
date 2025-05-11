import { useEffect, useState } from "react";
import { Routing } from "./common/routing";
//import { testAuth, testFirestore } from './shared/api/firebase/test-connection'

import { useAppDispatch, useAppSelector } from "./common/hooks";
import { selectThemeMode, setIsLoggedInAC } from "./app/app-slice";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./App.module.css";
import { useAuth } from "./features/auth/model/useAuth";
import { getCurrentUser } from "./shared/api/firebase";
import { Header } from "./common/components";
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "./common/theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const { isLoading } = useAuth();
  const dispatch = useAppDispatch();

  const themeMode = useAppSelector(selectThemeMode);
  const theme = getTheme(themeMode);

  useEffect(() => {
    if (isLoading) return;
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
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <CssBaseline />
        <Header />
        <Routing />
      </div>
    </ThemeProvider>
  );
}

export default App;
