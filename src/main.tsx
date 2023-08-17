import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '@context/ThemeProvider';
import App from './App';

import * as S from './global.styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <S.Overall />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
);
