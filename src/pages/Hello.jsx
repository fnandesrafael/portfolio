import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Hello.scss';

const GREETINGS = ['Pax!', 'Olá!', '¡Hola!', 'Hello!'];
const TRANSITION = {
  delay: 1,
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export default function Hello() {
  const [hasGreeted, setHasGreeted] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => prevIndex + 1);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setHasGreeted(true);
    }, 1500);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -1000 }}
      transition={TRANSITION}
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
