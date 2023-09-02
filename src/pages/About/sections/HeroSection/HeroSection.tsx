import React, { useContext } from 'react';
import { Variants, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import { EASE_SWEET } from '@constants/animations';
import darkPaint from '@assets/images/paints/the_starry_night.jpg';
import lightPaint from '@assets/images/paints/green_wheat_field_with_cypress.jpg';
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
};

const firstNameVariant: Variants = {
  animate: {
    transition: {
      delayChildren: 1,
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
};

export default function HeroSection() {
  const theme = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();

  const scrollPosition = useTransform(scrollYProgress, [0, 1], [2.65, 5]);

  return (
    <S.SectionWrapper>
      <GoghFrame.Root
        motionValues={{
          initial: {
            alignItems: 'center',
            display: 'flex',
          },
          animate: {
            borderRadius: '10rem 10rem 0 0',
            height: '200vh',
            top: 72,
            transition: { duration: 1.5, ease: EASE_SWEET },
            width: '100vw',
          },
        }}
      >
        {theme.title === 'dark' ? (
          <GoghFrame.Paint
            src={darkPaint}
            motionValues={{
              initial: { y: 0, scale: 3, marginTop: '11.5rem' },
              animate: {
                y: 350,
                scale: 2.65,
                filter: 'saturate(0.5)',
                transition: {
                  duration: 1.5,
                  ease: EASE_SWEET,
                },
              },
            }}
            scrollPosition={scrollPosition}
          />
        ) : (
          <GoghFrame.Paint
            src={lightPaint}
            motionValues={{
              initial: { y: 0, scale: 3, marginTop: '11.5rem' },
              animate: {
                y: 300,
                scale: 2.65,
                filter: 'saturate(0.5)',
                transition: {
                  duration: 1.5,
                  ease: EASE_SWEET,
                },
              },
            }}
            scrollPosition={scrollPosition}
          />
        )}
      </GoghFrame.Root>

      <ScrollIcon.Root>
        <ScrollIcon.Icon />
      </ScrollIcon.Root>

      <S.TextWrapper>
        <Signature.Root
          styles={{
            fontSize: '6.5rem',
            lineHeight: '125%',
            letterSpacing: '2rem',
            width: '64rem',
          }}
        >
          <Signature.Text
            wordVariants={firstNameVariant}
            letterVariant={letterVariant}
          >
            Rafael
          </Signature.Text>
          <Signature.Text
            wordVariants={lastNameVariant}
            letterVariant={letterVariant}
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
        >
          Frontend Web Developer & Aspiring UX Designer
        </S.SubHeading>
      </S.TextWrapper>
    </S.SectionWrapper>
  );
}
