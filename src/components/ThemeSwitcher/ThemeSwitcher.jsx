import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import Toggle from './Toggle';

import './ThemeSwitcher.scss';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  return (
    <div className="toggle-wrapper">
      <MoonIcon />
      <Toggle switchTheme={switchTheme} />
      <SunIcon />
    </div>
  );
}
