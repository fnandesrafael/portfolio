import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';

import './Header.scss';

export default function Header() {
  return (
    <motion.header
      className="header-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <Link to="/home">
        <span className="header-username">@rafaelimaf</span>
      </Link>
      <ThemeSwitcher />
    </motion.header>
  );
}
