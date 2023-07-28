import React from 'react';
import MouseFollower from '@components/MouseFollower';
import { motion } from 'framer-motion';

export default function Composition() {
  return (
    <MouseFollower.Root>
      <MouseFollower.Element>
        <motion.p
          className="w-24 text-zinc-300 text-sm tracking-wider mix-blend-difference"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          click on the frame and stay on it
        </motion.p>
      </MouseFollower.Element>
    </MouseFollower.Root>
  );
}
