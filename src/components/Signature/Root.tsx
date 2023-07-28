import React from 'react';
import { motion } from 'framer-motion';

type RootProps = {
  props: { styles: string };
  children: React.ReactNode;
};

export default function Root({ props: { styles }, children }: RootProps) {
  return (
    <motion.div
      className={styles}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
