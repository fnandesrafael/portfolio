import React, { useEffect } from 'react';
import badge from '@assets/images/white_badge.png';
import { Navigation } from '@components/Navigation';
import MouseFollower from '@components/MouseFollower';
import HeroSection from './sections/HeroSection';
import BioSection from './sections/BioSection';

import * as S from './styles';

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

      <Navigation.Root>
        <Navigation.NavLink props={{ page: '/home' }}>Home</Navigation.NavLink>
        <Navigation.NavLink props={{ page: '/resume' }}>
          Resume
        </Navigation.NavLink>
      </Navigation.Root>
    </S.PageWrapper>
  );
}
