import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GoghFrame from './components/GoghFrame';
import badgeLight from '../../assets/images/badge_light.png';
import badgeDark from '../../assets/images/badge_dark.png';
import { ThemeContext } from '../../context/ThemeProvider';

import './Home.scss';

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
        className="badge"
        src={theme === 'dark-mode' ? badgeDark : badgeLight}
        key={`${theme}-badge`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      />
      <GoghFrame />
      <motion.p
        className="home-name"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        Rafael Fernandes
      </motion.p>
    </div>
  );
}
