import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from './theme/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
