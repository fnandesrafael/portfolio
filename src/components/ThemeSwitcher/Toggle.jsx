import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

export default function Toggle({ switchTheme }) {
  const { theme } = useContext(ThemeContext);

  return (
    <label className="toggle" htmlFor="checkbox">
      <input
        className="toggle-input"
        type="checkbox"
        name=""
        id="checkbox"
        onClick={switchTheme}
        checked={theme === 'light-mode'}
      />
      <div className="toggle-element" />
    </label>
  );
}
