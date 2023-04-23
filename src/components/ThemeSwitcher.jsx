import React, { useState } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark-mode');

  const switchTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
    document.body.className = theme;
  };

  return <button onClick={switchTheme}>Switch Theme</button>;
}
