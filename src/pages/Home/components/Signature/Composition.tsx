import React from 'react';
import { Signature } from '@components/Signature';
import { Variants } from 'framer-motion';

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

const secondNameVariant: Variants = {
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
      <Signature.Text props={{ wordVariants: firstNameVariant, letterVariant }}>
        Rafael
      </Signature.Text>

      <Signature.Text
        props={{ wordVariants: secondNameVariant, letterVariant }}
      >
        Fernandes
      </Signature.Text>
    </Signature.Root>
  );
}
