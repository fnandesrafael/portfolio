import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Hello from './pages/Hello';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { ThemeContext } from './context/ThemeProvider';

import './App.scss';

export default function App() {
  const { theme } = useContext(ThemeContext);

  const location = useLocation();

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="app-wrapper">
      <AnimatePresence>
        {location.pathname === '/' ? null : <Header />}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hello />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </AnimatePresence>
    </div>
  );
}
