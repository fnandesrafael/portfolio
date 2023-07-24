import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '@context/ThemeProvider';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

export default function ThemeSwitcher() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const switchTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <motion.label
      className="flex flex-row justify-center items-center h-10 w-10 rounded-full bg-amber-300 cursor-pointer mt-5 mr-6"
      htmlFor="checkbox"
      whileHover={{ scale: 1.15 }}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
      <input
        className="hidden"
        type="checkbox"
        name=""
        id="checkbox"
        onChange={switchTheme}
        checked={isDarkMode}
      />
    </motion.label>
  );
}
