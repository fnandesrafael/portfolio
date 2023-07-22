import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ThemeSwitcher from '@components/ThemeSwitcher';

import './Header.scss';

export default function Header() {
  const [canShow, setCanShow] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTimeout(() => {
        setCanShow(true);
      }, 4000);
    } else {
      setCanShow(true);
    }
  }, []);

  return canShow ? (
    <motion.header
      className="header-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
    >
      <ThemeSwitcher />
    </motion.header>
  ) : null;
}
