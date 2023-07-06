import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../../context/ThemeProvider';
import DarkGogh from '../../../../assets/images/the_starry_night.jpg';
import LightGogh from '../../../../assets/images/green_wheat_field_with_cypress.jpg';

import './GoghHero.scss';

export default function GoghHero() {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      className="paint-frame"
      animate={{
        borderRadius: 0,
        height: '110vh',
        transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
        width: '100%',
      }}
    >
      <motion.h1
        className="hero-name"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.25, duration: 0.8, ease: 'easeInOut' },
        }}
      >
        Rafael Fernandes
      </motion.h1>
      {theme === 'dark-mode' ? (
        <motion.img
          className="gogh-paint"
          src={DarkGogh}
          initial={{ y: 0, scale: 3 }}
          animate={{
            y: 10,
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
            y: -10,
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
  );
}
