import React, { useEffect, useLayoutEffect } from 'react';
import badge from '@assets/images/white_badge.png';
import { Navigator } from '@components/Navigator';
import MouseFollower from '@components/MouseFollower';
import HeroSection from './sections/HeroSection';
import BioSection from './sections/BioSection';

import * as S from './styles';

export default function About() {
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
    <>
      <S.PageWrapper>
        <MouseFollower.Root>
          <MouseFollower.Element blended>
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

      <Navigator.Root>
        <Navigator.NavLink props={{ page: '/home' }}>Home</Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/resume' }}>
          Resume
        </Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/stacks' }}>
          Stacks
        </Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/projects' }}>
          Projects
        </Navigator.NavLink>
      </Navigator.Root>
    </>
  );
}
