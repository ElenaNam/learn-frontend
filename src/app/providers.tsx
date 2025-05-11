//import { auth } from "@/shared/api/firebase/config";
//import { AuthProvider as FirebaseAuthProvider } from "react-firebase-hooks/auth";
//import { AuthContextProvider } from "react-firebase-hooks/auth";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "./store";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {children}
        {/* <AuthContextProvider  auth={auth}>{children}</AuthContextProvider> */}
      </Provider>
    </BrowserRouter>
  );
};
