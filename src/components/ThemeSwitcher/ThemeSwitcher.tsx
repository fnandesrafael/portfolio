import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '@context/ThemeProvider';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

import './ThemeSwitcher.scss';

export default function ThemeSwitcher() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const switchTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <motion.div className="toggle-wrapper" whileHover={{ scale: 1.15 }}>
      <label className="toggle" htmlFor="checkbox">
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
        <input
          className="toggle-input"
          type="checkbox"
          name=""
          id="checkbox"
          onChange={switchTheme}
          checked={isDarkMode}
        />
      </label>
    </motion.div>
  );
}
