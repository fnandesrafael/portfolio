import React, { useContext } from 'react';
import { Variants, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import { EASE_SWEET } from '@constants/animations';
import darkPaint from '@assets/images/the_starry_night.jpg';
import lightPaint from '@assets/images/green_wheat_field_with_cypress.jpg';
import { GoghFrame } from '@components/GoghFrame';
import { ScrollIcon } from '@components/ScrollIcon';
import { Signature } from '@components/Signature';

import * as S from './styles';

const letterVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: EASE_SWEET,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: EASE_SWEET,
    },
  },
};

const firstNameVariant: Variants = {
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

export default function HeroSection() {
  const theme = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();

  const scrollPosition = useTransform(scrollYProgress, [0, 1], [2.65, 3.25]);

  return (
    <>
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
              transition: { duration: 1.5, ease: EASE_SWEET },
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
                    ease: EASE_SWEET,
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
                    ease: EASE_SWEET,
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

      <S.TextWrapper>
        <Signature.Root
          props={{
            styles: {
              fontSize: '6.5rem',
              lineHeight: '125%',
              letterSpacing: '2rem',
              width: '64rem',
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

        <S.SubHeading
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 1, ease: EASE_SWEET },
          }}
          exit={{
            opacity: 0,
            transition: { delay: 0, duration: 1, ease: EASE_SWEET },
          }}
        >
          Frontend Web Developer & Aspiring UX Designer
        </S.SubHeading>
      </S.TextWrapper>
    </>
  );
}
