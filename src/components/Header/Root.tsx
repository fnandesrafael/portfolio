import React from 'react';
import { motion } from 'framer-motion';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <motion.header
      className="fixed flex flex-row-reverse items-center h-16 w-screen z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
    >
      {children}
    </motion.header>
  );
}
