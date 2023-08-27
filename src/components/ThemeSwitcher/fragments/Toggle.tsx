import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import * as S from '../styles';

type ToggleProps = {
  switchTheme: () => void;
  children: React.ReactNode;
};

export default function Toggle({ switchTheme, children }: ToggleProps) {
  const theme = useContext(ThemeContext);

  return (
    <S.ToggleElement htmlFor="checkbox">
      {children}
      <input
        className="toggle-input"
        type="checkbox"
        name=""
        id="checkbox"
        onChange={switchTheme}
        checked={theme.title === 'dark'}
      />
    </S.ToggleElement>
  );
}
