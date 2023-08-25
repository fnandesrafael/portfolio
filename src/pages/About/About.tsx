import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { HistoryContext } from '@context/HistoryContext';
import badge from '@assets/images/white_badge.png';
import Transitioner from '@components/Transitioner';
import { Navigation } from '@components/Navigation';
import MouseFollower from '@components/MouseFollower';
import HeroSection from './sections/HeroSection';
import BioSection from './sections/BioSection';

import * as S from './styles';

export default function About() {
  const { prevRoute } = useContext(HistoryContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <Transitioner
      {...(prevRoute === '/home' ? {} : { slideIn: false })}
      slideOut
    >
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
          <Navigation.NavLink props={{ page: '/home' }}>
            Home
          </Navigation.NavLink>
          <Navigation.NavLink props={{ page: '/resume' }}>
            Resume
          </Navigation.NavLink>
        </Navigation.Root>
      </S.PageWrapper>
    </Transitioner>
  );
}
