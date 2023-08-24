import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EASE_OUT } from '@constants/animations/eases';

import * as S from './styles';

const greetings = ['Pax!', 'Olá!', '¡Hola!', 'Hello!'];

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
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate('/home');
    }, 2150);
  }, [navigate]);

  return (
    <S.HelloContainer
      initial={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{
        duration: 1,
        ease: EASE_OUT,
      }}
    >
      <S.GreetingElement
        key={`greeting-${greetingIndex}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {greetings[greetingIndex]}
      </S.GreetingElement>
    </S.HelloContainer>
  );
}
