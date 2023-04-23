import React from 'react';
import './Header.scss';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="header-wrapper">
      <p>rafaelimaf</p>
      <ThemeSwitcher />
    </header>
  );
}
