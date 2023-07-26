import React, { useContext, useEffect } from 'react';
import { Variants, motion } from 'framer-motion';
import { EASE_SWEET } from '@constants/animations';
import { ThemeContext } from '@context/ThemeProvider';
import badgeLight from '@assets/images/badge_light.png';
import badgeDark from '@assets/images/badge_dark.png';
import Signature from '@components/Signature';
import MouseFollower from '@components/MouseFollower';
import GoghFrame from './components/GoghFrame';

const letterVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_SWEET,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.8,
      ease: EASE_SWEET,
    },
  },
};

const firstNameLetters = ['R', 'a', 'f', 'a', 'e', 'l'];
const firstNameVariants: Variants = {
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

const lastNameLetters = ['F', 'e', 'r', 'n', 'a', 'n', 'd', 'e', 's'];
const lastNameVariants: Variants = {
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
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden; touch-action: none;`;

    return () => {
      document.body.style.cssText = `overflow: auto; touch-action: auto`;
    };
  }, []);

  return (
    <main className="flex flex-col items-center">
      <MouseFollower.Root>
        <MouseFollower.Element>
          <motion.p
            className="w-24 text-zinc-300 text-sm tracking-wider mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            click on the frame and stay on it
          </motion.p>
        </MouseFollower.Element>
      </MouseFollower.Root>

      <motion.img
        key={isDarkMode ? 'dark-badge' : 'light-badge'}
        className="absolute top-[7em] h-[28vh] mr-[15em] z-10 pointer-events-none"
        src={isDarkMode ? badgeDark : badgeLight}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        whileInView={{ rotate: '360deg', transition: { duration: 60 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      />

      <GoghFrame />

      <Signature.Root>
        <Signature.Text
          props={{
            letters: firstNameLetters,
            phraseVariants: firstNameVariants,
            letterVariants,
          }}
        />
        <Signature.Text
          props={{
            letters: lastNameLetters,
            phraseVariants: lastNameVariants,
            letterVariants,
          }}
        />
      </Signature.Root>
    </main>
  );
}
