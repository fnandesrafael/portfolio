import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import darkPaint from '@assets/images/the_starry_night.jpg';
import lightPaint from '@assets/images/green_wheat_field_with_cypress.jpg';
import { GoghFrame } from '@components/GoghFrame';
import ScrollIcon from './components/ScrollIcon';
import BioSection from './components/BioSection';

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
      <GoghFrame.Root
        props={{
          hasLink: false,
          motionValues: {
            initial: {
              alignItems: 'center',
              display: 'flex',
            },
            animate: {
              borderRadius: '10em 10em 0 0',
              height: '215vh',
              top: 75,
              transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
              width: '100%',
            },
          },
        }}
      >
        {theme.title === 'dark' ? (
          <GoghFrame.Paint
            props={{
              src: darkPaint,
              motionValues: {
                initial: { y: 0, scale: 3, marginTop: '15vh' },
                animate: {
                  y: 350,
                  scale: 2.65,
                  filter: 'saturate(0.15)',
                  transition: {
                    duration: 1.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                },
              },
            }}
          />
        ) : (
          <GoghFrame.Paint
            props={{
              src: lightPaint,
              motionValues: {
                initial: { y: 0, scale: 3, marginTop: '15vh' },
                animate: {
                  y: 300,
                  scale: 2.65,
                  filter: 'saturate(0.15) brightness(0.85)',
                  transition: {
                    duration: 1.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                },
              },
            }}
          />
        )}
      </GoghFrame.Root>

      <ScrollIcon />

      <BioSection />
    </S.PageWrapper>
  );
}
