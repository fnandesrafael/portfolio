import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeSwitcher } from '.';

type ThemeSwitcherProps = {
  switchTheme: () => void;
};

export default function Composition({ switchTheme }: ThemeSwitcherProps) {
  const theme = useContext(ThemeContext);

  return (
    <ThemeSwitcher.Root>
      <ThemeSwitcher.Toggle switchTheme={switchTheme}>
        {theme.title === 'dark' ? (
          <ThemeSwitcher.SunIcon />
        ) : (
          <ThemeSwitcher.MoonIcon />
        )}
      </ThemeSwitcher.Toggle>
    </ThemeSwitcher.Root>
  );
}
