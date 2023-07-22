import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'light-mode',
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
