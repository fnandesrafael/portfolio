import React, { useContext } from 'react';
import { ThemeContext } from '@context/ThemeProvider';
import { ThemeSwitcher } from '.';

export default function Component() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const switchTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeSwitcher.Root>
      <ThemeSwitcher.Button props={{ switchTheme, isDarkMode }}>
        {isDarkMode ? <ThemeSwitcher.SunIcon /> : <ThemeSwitcher.MoonIcon />}
      </ThemeSwitcher.Button>
    </ThemeSwitcher.Root>
  );
}
