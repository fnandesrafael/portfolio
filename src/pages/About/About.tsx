import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import darkBadge from '@assets/images/dark_badge.png';
import lightBadge from '@assets/images/light_badge.png';
import MouseFollower from '@components/MouseFollower';
import HeroSection from './sections/HeroSection';

import * as S from './styles';

export default function About() {
  const theme = useContext(ThemeContext);

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
      <MouseFollower.Root>
        <MouseFollower.Element>
          <S.BadgeElement
            src={theme.title === 'dark' ? darkBadge : lightBadge}
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
            exit={{ opacity: 0, transition: { duration: 1 } }}
          />
        </MouseFollower.Element>
      </MouseFollower.Root>

      <HeroSection />
    </S.PageWrapper>
  );
}
