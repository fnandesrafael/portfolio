import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Hello.scss';

const GREETINGS = ['Pax!', 'Olá!', '¡Hola!', 'Hello!'];

export default function Hello() {
  const [hasGreeted, setHasGreeted] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';

    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => prevIndex + 1);
    }, 250);

    return () => {
      clearInterval(interval);
      document.body.style.cssText = 'overflow: auto';
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setHasGreeted(true);
    }, 2000);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -1000 }}
      transition={{
        delay: 1,
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="hello-wrapper"
    >
      {hasGreeted ? (
        <Navigate to="/home" />
      ) : (
        <h1 className="hello-greeting">{GREETINGS[greetingIndex]}</h1>
      )}
    </motion.div>
  );
}
