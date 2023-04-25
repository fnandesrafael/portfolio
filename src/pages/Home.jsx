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
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="home-name"
      >
        Rafael de Lima
      </motion.p>
    </div>
  );
}
