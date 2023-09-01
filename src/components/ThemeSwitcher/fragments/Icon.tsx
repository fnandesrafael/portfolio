import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

export default function Icon() {
  const theme = useContext(ThemeContext);

  return <>{theme.title === 'dark' ? <SunIcon /> : <MoonIcon />}</>;
}
