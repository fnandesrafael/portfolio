import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';
import DarkGogh from '../../assets/images/the_starry_night.jpg';
import LightGogh from '../../assets/images/green_wheat_field_with_cypress.jpg';

import './GoghFrame.scss';

export default function GoghFrame() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="paint-frame">
      <Link to="/about">
        {theme === 'dark-mode' ? (
          <motion.img
            key={`${theme}-paint`}
            className="gogh-paint"
            src={DarkGogh}
            initial={{ y: -200, opacity: 0, scale: 2.4 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            whileHover={{
              scale: 3,
            }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        ) : (
          <motion.img
            key={`${theme}-paint`}
            className="gogh-paint"
            src={LightGogh}
            initial={{ y: 200, opacity: 0, scale: 2.4 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            whileHover={{
              scale: 3,
            }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        )}
      </Link>
    </div>
  );
}
