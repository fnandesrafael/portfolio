import React from 'react';
import { motion } from 'framer-motion';
import { EASE_SWEET } from '@constants/animations';

const firstNameLetters = ['R', 'a', 'f', 'a', 'e', 'l'];
const secondNameLetters = ['F', 'e', 'r', 'n', 'a', 'n', 'd', 'e', 's'];

const letterVariant = {
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

const firstNameVariant = {
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

const lastNameVariant = {
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

export default function Signature() {
  return (
    <motion.div
      className="home-name"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.span className="first-name" variants={firstNameVariant}>
        {firstNameLetters.map((letter, index) => (
          <motion.span key={index} variants={letterVariant}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
      <motion.span className="second-name" variants={lastNameVariant}>
        {secondNameLetters.map((letter, index) => (
          <motion.span key={index} variants={letterVariant}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
}
