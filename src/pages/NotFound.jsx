import React from 'react';
import { motion } from 'framer-motion';

import './NotFound.scss';

function NotFound() {
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

export default NotFound;
