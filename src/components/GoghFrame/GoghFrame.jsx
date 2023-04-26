import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';
import DarkVanGogh from '../../assets/images/the_starry_night.jpg';
import LightVanGogh from '../../assets/images/green_wheat_field_with_cypress.jpg';

import './GoghFrame.scss';

const TRANSITION = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

export default function GoghFrame() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="img-frame">
      <Link to="/about">
        {theme === 'dark-mode' ? (
          <motion.img
            key={theme}
            src={DarkVanGogh}
            initial={{ y: -200, opacity: 0, scale: 2 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: TRANSITION.ease },
            }}
            whileHover={{
              scale: 2.2,
            }}
            transition={TRANSITION}
          />
        ) : (
          <motion.img
            key={theme}
            src={LightVanGogh}
            initial={{ y: 200, opacity: 0, scale: 2 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: TRANSITION.ease },
            }}
            whileHover={{
              scale: 2.2,
            }}
            transition={TRANSITION}
          />
        )}
      </Link>
    </div>
  );
}
