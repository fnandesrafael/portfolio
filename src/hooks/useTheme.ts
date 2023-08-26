import { useState } from 'react';
import { light, dark } from '../styles/themes';

type ThemeProps = {
  title: string;
  colors: {
    primary: string;
    secundary: string;
    textPrimary: string;
    textSecundary: string;
    textTerciary: string;
    background: string;
    highlight: string;
  };
};

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeProps>(dark);

  const switchTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return { theme, switchTheme };
};

export default useTheme;
