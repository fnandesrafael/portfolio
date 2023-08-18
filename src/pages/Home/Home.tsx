import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import badgeLight from '@assets/images/badge_light.png';
import badgeDark from '@assets/images/badge_dark.png';
import { ThemeContext } from 'styled-components';
import { MouseFollower } from '@components/MouseFollower';
import GoghFrame from './components/GoghFrame';

import './Home.scss';

const letterVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const firstNameVariant = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  exit: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const secondNameVariant = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

export default function Home() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden; touch-action: none;`;

    return () => {
      document.body.style.cssText = `overflow: auto; touch-action: auto`;
    };
  }, []);

  return (
    <div className="home-wrapper">
      <MouseFollower.Root>
        <MouseFollower.Follower>
          click on the frame and stay on it
        </MouseFollower.Follower>
      </MouseFollower.Root>

      <motion.img
        key={`${theme}-badge`}
        className="badge"
        src={theme === 'dark-mode' ? badgeDark : badgeLight}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      />
      <GoghFrame />
      <motion.div
        className="home-name"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.span className="first-name" variants={firstNameVariant}>
          <motion.span variants={letterVariant}>R</motion.span>
          <motion.span variants={letterVariant}>a</motion.span>
          <motion.span variants={letterVariant}>f</motion.span>
          <motion.span variants={letterVariant}>a</motion.span>
          <motion.span variants={letterVariant}>e</motion.span>
          <motion.span variants={letterVariant}>l</motion.span>
        </motion.span>
        <motion.span className="second-name" variants={secondNameVariant}>
          <motion.span variants={letterVariant}>F</motion.span>
          <motion.span variants={letterVariant}>e</motion.span>
          <motion.span variants={letterVariant}>r</motion.span>
          <motion.span variants={letterVariant}>n</motion.span>
          <motion.span variants={letterVariant}>a</motion.span>
          <motion.span variants={letterVariant}>n</motion.span>
          <motion.span variants={letterVariant}>d</motion.span>
          <motion.span variants={letterVariant}>e</motion.span>
          <motion.span variants={letterVariant}>s</motion.span>
        </motion.span>
      </motion.div>
    </div>
  );
}
