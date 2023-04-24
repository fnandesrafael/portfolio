import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import './ThemeSwitcher.scss';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  return (
    <div className="toggle-wrapper">
      <MoonIcon />
      <button onClick={switchTheme}>Switch Theme</button>
      <SunIcon />
    </div>
  );
}
