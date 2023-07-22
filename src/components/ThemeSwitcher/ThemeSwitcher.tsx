import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '@context/ThemeProvider';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

import './ThemeSwitcher.scss';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  return (
    <motion.div className="toggle-wrapper" whileHover={{ scale: 1.15 }}>
      <label className="toggle" htmlFor="checkbox">
        {theme === 'dark-mode' ? <SunIcon /> : <MoonIcon />}
        <input
          className="toggle-input"
          type="checkbox"
          name=""
          id="checkbox"
          onChange={switchTheme}
          checked={theme === 'light-mode'}
        />
      </label>
    </motion.div>
  );
}
