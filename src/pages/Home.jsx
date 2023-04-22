import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <motion.h1 exit={{ opacity: 0 }}>Home</motion.h1>
      <Link to="/hello">
        <button>Navigate</button>
      </Link>
    </>
  );
}
