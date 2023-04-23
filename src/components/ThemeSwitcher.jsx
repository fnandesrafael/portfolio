import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  return <button onClick={switchTheme}>Switch Theme</button>;
}
