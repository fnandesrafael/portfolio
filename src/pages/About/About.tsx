import React, { useEffect } from 'react';
import badge from '@assets/images/white_badge.png';
import MouseFollower from '@components/MouseFollower';
import HeroSection from './sections/HeroSection';

import * as S from './styles';
import BioSection from './sections/BioSection';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <MouseFollower.Root>
        <MouseFollower.Element props={{ blend: true }}>
          <S.BadgeElement
            src={badge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            whileInView={{
              transform: 'rotate(360deg)',
              transition: {
                duration: 20,
                loop: Infinity,
                ease: 'linear',
              },
            }}
          />
        </MouseFollower.Element>
      </MouseFollower.Root>

      <HeroSection />

      <BioSection />
    </S.PageWrapper>
  );
}
