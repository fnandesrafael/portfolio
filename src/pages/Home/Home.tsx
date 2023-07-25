import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import badgeLight from '@assets/images/badge_light.png';
import badgeDark from '@assets/images/badge_dark.png';
import { ThemeContext } from '@context/ThemeProvider';
import { EASE_SWEET } from '@constants/animations';
import GoghFrame from './components/GoghFrame';

import './Home.scss';
import MouseFollower from './components/MouseFollower/MouseFollower';

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
      ease: EASE_SWEET,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.8,
      ease: EASE_SWEET,
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

const lastNameVariant = {
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
  const { isDarkMode } = useContext(ThemeContext);
  const [mouseMove, setMouseMove] = useState<boolean>(false);
  const mouseRef = useRef<HTMLParagraphElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setMouseMove(true);

    const follower = mouseRef.current;

    if (follower) {
      const x = e.clientX;
      const y = e.clientY;

      follower.style.cssText = `top: ${y}px; left: ${x}px;`;
    }
  };

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden; touch-action: none;`;
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cssText = `overflow: auto; touch-action: auto`;
    };
  }, []);

  return (
    <main className="home-wrapper">
      {mouseMove ? <MouseFollower props={{ mouseRef }} /> : null}
      <motion.img
        key={isDarkMode ? 'dark-badge' : 'light-badge'}
        className="badge"
        src={isDarkMode ? badgeDark : badgeLight}
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
        <motion.span className="second-name" variants={lastNameVariant}>
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
    </main>
  );
}
