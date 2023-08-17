import React from 'react';

import { Header } from './index';

export default function Composition() {
  return (
    <Header.Root>
      <Header.ThemeSwitcher />
    </Header.Root>
  );
}
