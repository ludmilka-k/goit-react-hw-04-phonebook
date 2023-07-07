import React from 'react';
import { ThemeProvider } from '@emotion/react'
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import {theme} from './constans';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
