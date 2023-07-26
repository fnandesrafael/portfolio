import React from 'react';
import { motion } from 'framer-motion';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  return (
    <motion.div
      className="flex w-[108.75%] absolute top-[calc(100%-7vw)] -left-[0.42em] text-[6.42vw] font-extralight justify-around text-start tracking-[0.5em] whitespace-nowrap pointer-events-none"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
