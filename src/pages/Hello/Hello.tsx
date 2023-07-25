import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE_SLOW_OUT } from '@constants/animations';

const greetings = ['Pax!', 'Olá!', '¡Hola!', 'Hello!'];

export default function Hello() {
  const [greetingIndex, setGreetingIndex] = useState<number>(0);
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
    }, 2150);
  }, [navigate]);

  return (
    <motion.main
      initial={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{
        duration: 1,
        ease: EASE_SLOW_OUT,
      }}
      className="flex flex-col items-center justify-center h-screen w-screen origin-top bg-zinc-950"
    >
      <motion.h1
        key={`greeting-${greetingIndex}`}
        className="text-4xl text-white -translate-y-12"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {greetings[greetingIndex]}
      </motion.h1>
    </motion.main>
  );
}
