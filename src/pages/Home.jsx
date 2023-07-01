import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import GoghFrame from '../components/GoghFrame';
import badgeLight from '../assets/images/badge_light.png';
import badgeDark from '../assets/images/badge_dark.png';

import './Home.scss';
import { ThemeContext } from '../context/ThemeProvider';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home-wrapper">
      <motion.img
        className="badge"
        src={theme === 'dark-mode' ? badgeDark : badgeLight}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      />
      <GoghFrame />
      <motion.p
        className="home-name"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        Rafael Fernandes
      </motion.p>
    </div>
  );
}
