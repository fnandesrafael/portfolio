import React from 'react';
import { motion } from 'framer-motion';
import GoghFrame from '../components/GoghFrame';

import './Home.scss';

export default function Home() {
  return (
    <div className="home-wrapper">
      <GoghFrame />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="home-name"
      >
        @fnandesrafael
      </motion.p>
    </div>
  );
}
