import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Hello.scss';

const GREETINGS = ['Pax!', 'Olá!', '¡Hola!', 'Hello!', '🔥'];

export default function Hello() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';

    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => prevIndex + 1);
    }, 500);

    return () => {
      clearInterval(interval);
      document.body.style.cssText = 'overflow: auto';
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2500);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      className="hello-wrapper"
    >
      <motion.h1
        key={`greeting-${greetingIndex}`}
        className="hello-greeting"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {GREETINGS[greetingIndex]}
      </motion.h1>
    </motion.div>
  );
}
