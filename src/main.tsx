import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { LibraryContextProvider } from './contexts/LibraryContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LibraryContextProvider>
      <App />
    </LibraryContextProvider>
  </React.StrictMode>
);
