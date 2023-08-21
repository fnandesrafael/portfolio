import React from 'react';
import { Variants, motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

type TextProps = {
  props: {
    wordVariants: Variants;
    letterVariant: Variants;
  };
  children: string;
};

export default function Text({
  props: { letterVariant, wordVariants },
  children,
}: TextProps) {
  return (
    <>
      <motion.span variants={wordVariants}>
        {children.split('').map((letter) => (
          <motion.span key={uuid()} variants={letterVariant}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </>
  );
}
