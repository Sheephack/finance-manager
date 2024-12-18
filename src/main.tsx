import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryProvider } from './QueryProvider.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
