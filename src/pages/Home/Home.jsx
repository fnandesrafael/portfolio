import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GoghFrame from './components/GoghFrame';
import badgeLight from '../../assets/images/badge_light.png';
import badgeDark from '../../assets/images/badge_dark.png';
import { ThemeContext } from '../../context/ThemeProvider';

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
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
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
      delayChildren: 1,
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
      delayChildren: 1,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const [mouseMove, setMouseMove] = useState(false);
  const mouseRef = useRef(null);

  const handleMouseMove = (e) => {
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
    <div className="home-wrapper">
      {mouseMove ? (
        <motion.p
          key="mouse-follower"
          ref={mouseRef}
          className="mouse-follower"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          click on the frame and stay on it
        </motion.p>
      ) : null}
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
