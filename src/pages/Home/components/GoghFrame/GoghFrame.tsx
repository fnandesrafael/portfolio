import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DarkGogh from '@assets/images/the_starry_night.jpg';
import LightGogh from '@assets/images/green_wheat_field_with_cypress.jpg';
import { ThemeContext } from '@context/ThemeProvider';
import { EASE_SWEET } from '@constants/animations';

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
              transition: { duration: 1.5, ease: EASE_SWEET },
            }}
            whileHover={{
              scale: 3,
            }}
            transition={{ duration: 1, ease: EASE_SWEET }}
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
              transition: { duration: 1.5, ease: EASE_SWEET },
            }}
            whileHover={{
              scale: 3,
            }}
            transition={{ duration: 1, ease: EASE_SWEET }}
          />
        )}
      </Link>
    </div>
  );
}
