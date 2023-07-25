import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeContext } from '@context/ThemeProvider';
import About from '@pages/About';
import Hello from '@pages/Hello';
import Header from '@components/Header';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

export default function App() {
  const { isDarkMode } = useContext(ThemeContext);

  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="app-wrapper">
      <Header.Root>
        <Header.ThemeSwitcher />
      </Header.Root>
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
