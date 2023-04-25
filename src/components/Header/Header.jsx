import React from 'react';
import { motion } from 'framer-motion';
import ThemeSwitcher from '../ThemeSwitcher';

import './Header.scss';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="header-wrapper"
    >
      <p className="header-username">@rafaelimaf</p>
      <ThemeSwitcher />
    </motion.header>
  );
}
