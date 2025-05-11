//import { baseApi } from "@/app/baseApi"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { appReducer, appSlice } from "./app-slice"
//import { appReducer, appSlice } from "./app-slice.ts"

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-expect-error - для возможности обращения к store в консоли браузера
window.store = store
