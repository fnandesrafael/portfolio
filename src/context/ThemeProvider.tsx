import React, { ReactNode, createContext, useState } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextProps>(null);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(
    JSON.parse(localStorage.getItem('theme')) || 'light-mode',
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
