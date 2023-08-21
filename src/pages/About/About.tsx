import React, { useContext, useEffect } from 'react';
import { Variants, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import darkPaint from '@assets/images/the_starry_night.jpg';
import lightPaint from '@assets/images/green_wheat_field_with_cypress.jpg';
import { GoghFrame } from '@components/GoghFrame';
import { ScrollIcon } from '@components/ScrollIcon';
import { Signature } from '@components/Signature';

import * as S from './styles';

const letterVariant: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const firstNameVariant: Variants = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  exit: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastNameVariant: Variants = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

export default function About() {
  const theme = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();

  const scrollPosition = useTransform(scrollYProgress, [0, 1], [2.65, 3.25]);

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
              scrollPosition,
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
              scrollPosition,
            }}
          />
        )}
      </GoghFrame.Root>

      <ScrollIcon.Root>
        <ScrollIcon.Icon />
      </ScrollIcon.Root>

      <Signature.Root
        props={{
          styles: {
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-start',
            zIndex: 10,
          },
        }}
      >
        <Signature.Text
          props={{ wordVariants: firstNameVariant, letterVariant }}
        >
          Rafael
        </Signature.Text>
        <Signature.Text
          props={{ wordVariants: lastNameVariant, letterVariant }}
        >
          Fernandes
        </Signature.Text>
      </Signature.Root>
    </S.PageWrapper>
  );
}
