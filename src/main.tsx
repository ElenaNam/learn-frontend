import { Provider } from "react-redux"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProviders } from './app/providers';
import React from 'react';
import { store } from "./app/store"

const MemoizedApp = React.memo(App);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppProviders>
      <MemoizedApp />
    </AppProviders>
  </Provider>,
)
