import Signature from '@components/Signature';
import { EASE_SWEET } from '@constants/animations';
import { Variants } from 'framer-motion';
import React from 'react';

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

export default function Composition() {
  return (
    <Signature.Root
      props={{
        styles:
          'flex w-[108.75%] absolute top-[calc(100%-7vw)] -left-[0.42em] text-[6.42vw] font-extralight justify-around text-start tracking-[0.5em] whitespace-nowrap pointer-events-none',
      }}
    >
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
  );
}
