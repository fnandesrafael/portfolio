import React, { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DarkGogh from '@assets/images/the_starry_night.jpg';
import LightGogh from '@assets/images/green_wheat_field_with_cypress.jpg';
import { ThemeContext } from '@context/ThemeProvider';
import { EASE_SWEET } from '@constants/animations';

import './GoghHero.scss';

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
};

const firstNameVariant = {
  animate: {
    transition: {
      delayChildren: 1,
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
};

export default function GoghHero() {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();

  const scrollMotion = useTransform(scrollYProgress, [0, 1], [2.65, 3.25]);

  return (
    <div className="hero-wrapper">
      <motion.div
        className="paint-frame"
        animate={{
          borderRadius: '10em 10em 0 0',
          height: '215vh',
          top: 75,
          transition: { duration: 1.5, ease: EASE_SWEET },
          width: '100%',
        }}
      >
        {theme === 'dark-mode' ? (
          <motion.img
            className="gogh-paint"
            src={DarkGogh}
            style={{ scale: scrollMotion }}
            initial={{ y: 0, scale: 3 }}
            animate={{
              y: 350,
              scale: 2.65,
              filter: 'saturate(0.15)',
              transition: {
                duration: 1.5,
                ease: EASE_SWEET,
              },
            }}
          />
        ) : (
          <motion.img
            className="gogh-paint"
            src={LightGogh}
            style={{ scale: scrollMotion }}
            initial={{ y: 0, scale: 3 }}
            animate={{
              y: 300,
              scale: 2.65,
              filter: 'saturate(0.15) brightness(0.85)',
              transition: {
                duration: 1.5,
                ease: EASE_SWEET,
              },
            }}
          />
        )}
      </motion.div>
      <motion.div initial="initial" animate="animate" className="hero-name">
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
    </div>
  );
}
