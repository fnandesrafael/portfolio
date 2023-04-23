import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DarkPaint from '../assets/images/the_starry_night.png';
import LightPaint from '../assets/images/green_wheat_field_with_cypress.jpg';
import './Home.scss';
import Header from '../components/Header';
import { ThemeContext } from '../context/ThemeProvider';

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div className="home-wrapper">
        <div className="img-frame">
          <Link to="/hello">
            <motion.img
              initial={{ opacity: 0, scale: 2 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 2 },
              }}
              whileHover={{
                scale: 2.5,
              }}
              transition={transition}
              src={theme === 'dark-mode' ? DarkPaint : LightPaint}
            />
          </Link>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="username"
        >
          Rafael de Lima
        </motion.p>
      </div>
    </>
  );
}
