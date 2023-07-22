import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import './NotFound.scss';

export default function NotFound() {
  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';
  }, []);

  return (
    <div className="not-found-wrapper">
      <motion.h1
        className="not-found-code"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        404
      </motion.h1>
    </div>
  );
}
