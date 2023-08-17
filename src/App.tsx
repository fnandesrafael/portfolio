import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from '@pages/About';
import Hello from '@pages/Hello';
import { Header } from '@components/Header';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import useTheme from '@hooks/useTheme';
import { ThemeProvider } from 'styled-components';

import * as S from './global.styles';

export default function App() {
  const location = useLocation();
  const { theme, switchTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper>
        <Header.Root>
          <Header.ThemeSwitcher props={{ switchTheme }} />
        </Header.Root>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hello />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </S.AppWrapper>
    </ThemeProvider>
  );
}
