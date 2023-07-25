import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import badgeLight from '@assets/images/badge_light.png';
import badgeDark from '@assets/images/badge_dark.png';
import { ThemeContext } from '@context/ThemeProvider';
import MouseFollower from './components/MouseFollower/MouseFollower';
import GoghFrame from './components/GoghFrame';
import Signature from './components/Signature/Signature';

import './Home.scss';

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);
  const [mouseMove, setMouseMove] = useState<boolean>(false);
  const mouseRef = useRef<HTMLParagraphElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
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
    <main className="home-wrapper">
      {mouseMove ? <MouseFollower props={{ mouseRef }} /> : null}
      <motion.img
        key={isDarkMode ? 'dark-badge' : 'light-badge'}
        className="badge"
        src={isDarkMode ? badgeDark : badgeLight}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      />
      <GoghFrame />
      <Signature />
    </main>
  );
}
