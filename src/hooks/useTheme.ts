import { useState } from 'react';
import { light, dark } from '../styles/themes';

const useTheme = () => {
  const [theme, setTheme] = useState(light);

  const switchTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return { theme, switchTheme };
};

export default useTheme;
