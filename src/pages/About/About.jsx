import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeProvider';
import DarkGogh from '../../assets/images/the_starry_night.jpg';
import LightGogh from '../../assets/images/green_wheat_field_with_cypress.jpg';

import './About.scss';

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="about-wrapper">
      <motion.div
        className="paint-frame"
        animate={{
          borderRadius: 0,
          height: '110vh',
          transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
          width: '100%',
        }}
      >
        {theme === 'dark-mode' ? (
          <motion.img
            className="gogh-paint"
            src={DarkGogh}
            initial={{ y: -10, scale: 2.5 }}
            animate={{
              y: 0,
              filter: 'saturate(0)',
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
            initial={{ y: 0, scale: 2.5 }}
            animate={{
              y: -10,
              filter: 'saturate(0)',
              transition: {
                duration: 1.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
