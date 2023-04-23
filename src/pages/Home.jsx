import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DarkImg from '../assets/images/the_starry_night.png';
import './Home.scss';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Home() {
  return (
    <div className="container">
      <div className="img-frame">
        <Link to="/hello">
          <motion.img
            initial={{ scale: 1.1 }}
            whileHover={{
              scale: 1.2,
            }}
            transition={transition}
            src={DarkImg}
          />
        </Link>
      </div>
      <motion.p
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="username"
      >
        Rafael de Lima
      </motion.p>
    </div>
  );
}
