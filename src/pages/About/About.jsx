import React, { useEffect } from 'react';
import GoghHero from './components/GoghHero';

import './About.scss';
import ScrollIcon from './components/ScrollIcon/ScrollIcon';

export default function About() {
  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';

    const scrollLock = setTimeout(() => {
      document.body.style.cssText = 'overflow: auto';
    }, 1250);

    return () => {
      clearTimeout(scrollLock);
    };
  }, []);

  return (
    <div className="about-wrapper">
      <GoghHero />
      <ScrollIcon />
      <div style={{ display: 'flex', marginTop: '100vh' }}>
        <h1>Lorem Ipsum</h1>
      </div>
    </div>
  );
}
