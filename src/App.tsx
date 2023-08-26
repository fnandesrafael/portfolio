import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import useTheme from '@hooks/useTheme';
import { Header } from '@components/Header';
import Hello from '@pages/Hello';
import Home from '@pages/Home';
import About from '@pages/About';
import Resume from '@pages/Resume';
import NotFound from '@pages/NotFound';

import * as S from './global.styles';

export default function App() {
  const location = useLocation();
  const { theme, switchTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.Overall />

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
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </S.AppWrapper>
    </ThemeProvider>
  );
}
