import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import badgeLight from '@assets/images/badge_light.png';
import badgeDark from '@assets/images/badge_dark.png';
import { MouseFollower } from '@components/MouseFollower';
import GoghFrame from './components/GoghFrame';
import Signature from './components/Signature';

import * as S from './styles';

export default function Home() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden; touch-action: none;`;

    return () => {
      document.body.style.cssText = `overflow: auto; touch-action: auto`;
    };
  }, []);

  return (
    <S.PageWrapper>
      <MouseFollower.Root>
        <MouseFollower.Text>
          click on the frame and stay on it
        </MouseFollower.Text>
      </MouseFollower.Root>

      <S.BadgeElement
        key={`${theme.title}-badge`}
        src={theme.title === 'dark' ? badgeDark : badgeLight}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        whileInView={{ transform: 'rotate(360deg)' }}
        transition={{
          duration: 60,
          loop: Infinity,
          ease: 'linear',
        }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      />

      <GoghFrame />

      <Signature />
    </S.PageWrapper>
  );
}
