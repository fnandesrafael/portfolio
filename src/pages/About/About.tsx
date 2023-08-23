import React, { useEffect } from 'react';
import HeroSection from './sections/HeroSection';

import * as S from './styles';

export default function About() {
  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';

    const scrollLock = setTimeout(() => {
      document.body.style.cssText = 'overflow-x: hidden';
    }, 2500);

    return () => {
      clearTimeout(scrollLock);
    };
  }, []);

  return (
    <S.PageWrapper>
      <HeroSection />
    </S.PageWrapper>
  );
}
