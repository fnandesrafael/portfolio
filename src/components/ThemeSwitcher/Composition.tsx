import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeSwitcher } from '.';

type ThemeSwitcherProps = {
  props: {
    switchTheme: () => void;
  };
};

export default function Composition({
  props: { switchTheme },
}: ThemeSwitcherProps) {
  const theme = useContext(ThemeContext);

  return (
    <ThemeSwitcher.Root>
      <ThemeSwitcher.Toggle props={{ switchTheme }}>
        {theme.title === 'dark' ? (
          <ThemeSwitcher.SunIcon />
        ) : (
          <ThemeSwitcher.MoonIcon />
        )}
      </ThemeSwitcher.Toggle>
    </ThemeSwitcher.Root>
  );
}
