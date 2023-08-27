import React from 'react';
import { Variants, motion } from 'framer-motion';

type TextProps = {
  wordVariants?: Variants;
  letterVariant?: Variants;
  children: string;
};

export default function Text({
  letterVariant,
  wordVariants,
  children,
}: TextProps) {
  return (
    <>
      <motion.span variants={wordVariants}>
        {children.split('').map((letter, index) => (
          <motion.span key={index} variants={letterVariant}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </>
  );
}
