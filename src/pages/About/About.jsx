import React, { useContext } from 'react';
// import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeProvider';
import DarkGogh from '../../assets/images/the_starry_night.jpg';

import './About.scss';

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="about-wrapper">
      <img key={`${theme}-gogh-bg`} className="gogh-bg" src={DarkGogh} alt="" />
    </div>
  );
}
