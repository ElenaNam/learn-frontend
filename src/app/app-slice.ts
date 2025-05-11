import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: "light" as ThemeMode,
    isLoggedIn: false,
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },

  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>(
      (state, action) => {
        state.themeMode = action.payload.themeMode;
      }
    ),
    setIsLoggedInAC: create.reducer<{ isLoggedIn: boolean }>(
      (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
      }
    ),
  }),
});

export const { selectThemeMode, selectIsLoggedIn } = appSlice.selectors;
export const { changeThemeModeAC, setIsLoggedInAC } = appSlice.actions;
export const appReducer = appSlice.reducer;

export type ThemeMode = "dark" | "light";
