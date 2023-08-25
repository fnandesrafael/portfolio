import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { Variants } from 'framer-motion';
import darkBadge from '@assets/images/dark_badge.png';
import lightBadge from '@assets/images/light_badge.png';
import darkPaint from '@assets/images/the_starry_night.jpg';
import lightPaint from '@assets/images/green_wheat_field_with_cypress.jpg';
import Transitioner from '@components/Transitioner';
import { EASE_SWEET } from '@constants/animations/eases';
import { MouseFollower } from '@components/MouseFollower';
import { GoghFrame } from '@components/GoghFrame';
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

export default function Home() {
  const theme = useContext(ThemeContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden; touch-action: none;`;

    return () => {
      document.body.style.cssText = `overflow: auto; touch-action: auto`;
    };
  }, []);

  return (
    <Transitioner slideIn>
      <S.PageWrapper>
        <MouseFollower.Root>
          <MouseFollower.Element props={{ blend: true, hasExit: true }}>
            click on the frame and stay on it
          </MouseFollower.Element>
        </MouseFollower.Root>

        <S.BadgeElement
          src={theme.title === 'dark' ? darkBadge : lightBadge}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          whileInView={{
            transform: 'rotate(360deg)',
            transition: {
              duration: 60,
              loop: Infinity,
              ease: 'linear',
            },
          }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        />

        <GoghFrame.Root props={{ hasLink: true, path: '/about' }}>
          {theme.title === 'dark' ? (
            <GoghFrame.Paint
              key="dark-paint"
              props={{
                src: darkPaint,
                motionValues: {
                  initial: { y: -200, opacity: 0, scale: 2.4 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1.5, ease: EASE_SWEET },
                  },
                  whileHover: {
                    scale: 3,
                  },
                  transition: { duration: 1, ease: EASE_SWEET },
                },
              }}
            />
          ) : (
            <GoghFrame.Paint
              key="light-paint"
              props={{
                src: lightPaint,
                motionValues: {
                  initial: { y: 200, opacity: 0, scale: 2.4 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1.5, ease: EASE_SWEET },
                  },
                  whileHover: {
                    scale: 3,
                  },
                  transition: { duration: 1, ease: EASE_SWEET },
                },
              }}
            />
          )}
        </GoghFrame.Root>

        <Signature.Root
          props={{
            styles: {
              display: 'flex',
              fontSize: '6.42vw',
              fontStyle: 'normal',
              fontWeight: '100',
              justifyContent: 'space-around',
              left: '-0.42em',
              letterSpacing: '0.5em',
              pointerEvents: 'none',
              position: 'absolute',
              textAlign: 'start',
              top: 'calc(100% - 7.25vw)',
              whiteSpace: 'nowrap',
              width: '108.75%',
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
    </Transitioner>
  );
}
