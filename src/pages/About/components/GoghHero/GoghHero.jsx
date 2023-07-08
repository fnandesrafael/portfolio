import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../../context/ThemeProvider';
import DarkGogh from '../../../../assets/images/the_starry_night.jpg';
import LightGogh from '../../../../assets/images/green_wheat_field_with_cypress.jpg';

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
};

const secondNameVariant = {
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

  return (
    <div className="hero-wrapper">
      <motion.div
        className="paint-frame"
        animate={{
          borderRadius: '10em 10em 0 0',
          height: '215vh',
          top: 75,
          transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
          width: '100%',
        }}
      >
        {theme === 'dark-mode' ? (
          <motion.img
            className="gogh-paint"
            src={DarkGogh}
            initial={{ y: 0, scale: 3 }}
            animate={{
              y: 350,
              scale: 2.65,
              filter: 'saturate(0.15)',
              transition: {
                duration: 1.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
          />
        ) : (
          <motion.img
            className="gogh-paint"
            src={LightGogh}
            initial={{ y: 0, scale: 3 }}
            animate={{
              y: 300,
              scale: 2.65,
              filter: 'saturate(0.15)',
              transition: {
                duration: 1.5,
                ease: [0.43, 0.13, 0.23, 0.96],
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
