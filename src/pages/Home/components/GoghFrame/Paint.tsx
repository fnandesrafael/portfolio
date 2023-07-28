import React from 'react';
import { motion } from 'framer-motion';

type PaintProps = {
  props: {
    key: string;
    src: string;
    animations: {
      initial: object;
      animate: object;
      whileHover: object;
      transition: object;
    };
  };
};

export default function Paint({
  props: {
    key,
    src,
    animations: { initial, animate, whileHover, transition },
  },
}: PaintProps) {
  return (
    <motion.img
      key={key}
      className="gogh-paint"
      src={src}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
    />
  );
}
