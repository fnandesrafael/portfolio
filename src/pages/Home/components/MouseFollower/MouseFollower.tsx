import React from 'react';
import { motion } from 'framer-motion';

type MouseFollowerProps = {
  props: {
    mouseRef: React.MutableRefObject<HTMLParagraphElement>;
  };
};

export default function MouseFollower({
  props: { mouseRef },
}: MouseFollowerProps) {
  return (
    <motion.p
      key="mouse-follower"
      ref={mouseRef}
      className="mouse-follower"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      click on the frame and stay on it
    </motion.p>
  );
}
