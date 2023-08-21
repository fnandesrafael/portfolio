import React, { useEffect } from 'react';
import GoghHero from './components/GoghHero';
import ScrollIcon from './components/ScrollIcon';
import BioSection from './components/BioSection';

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
      <GoghHero />

      <ScrollIcon />

      <BioSection />
    </S.PageWrapper>
  );
}
