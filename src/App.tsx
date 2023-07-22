import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeContext } from '@context/ThemeProvider.tsx';
import About from '@pages/About/index.ts';
import Hello from '@pages/Hello/index.ts';
import Header from '@components/Header/index.ts';
import Home from '@pages/Home/index.ts';
import NotFound from '@pages/NotFound/index.ts';

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
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hello />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
