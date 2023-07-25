import React from 'react';
import { motion, Variants } from 'framer-motion';

type TextProps = {
  props: {
    letters: Array<string>;
    letterVariants: Variants;
    phraseVariants: Variants;
  };
};

export default function Text({
  props: { letters, letterVariants, phraseVariants },
}: TextProps) {
  return (
    <motion.span variants={phraseVariants}>
      {letters.map((letter, index) => (
        <motion.span
          className="inline-block"
          key={index}
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
