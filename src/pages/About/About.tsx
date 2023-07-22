import React, { useEffect } from 'react';
import GoghHero from './components/GoghHero';
import ScrollIcon from './components/ScrollIcon';
import BioSection from './components/BioSection';

import './About.scss';

export default function About() {
  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';

    const scrollLock = setTimeout(() => {
      document.body.style.cssText = 'overflow-x: hidden';
    }, 2500);

    return () => {
      clearTimeout(scrollLock);
    };
  }, []);

  return (
    <div className="about-wrapper">
      <GoghHero />
      <ScrollIcon />
      <BioSection />
    </div>
  );
}
