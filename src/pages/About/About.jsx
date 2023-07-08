import React, { useEffect } from 'react';
import GoghHero from './components/GoghHero';

import './About.scss';
import ScrollIcon from './components/ScrollIcon/ScrollIcon';

export default function About() {
  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';

    const scrollLock = setTimeout(() => {
      document.body.style.cssText = 'overflow-x: hidden';
    }, 2750);

    return () => {
      clearTimeout(scrollLock);
    };
  }, []);

  return (
    <div className="about-wrapper">
      <GoghHero />
      <ScrollIcon />
      <div
        style={{
          display: 'flex',
          marginTop: '110vh',
          alignItems: 'center',
          flexFlow: 'column',
        }}
      >
        <h1>Lorem Ipsum</h1>
      </div>
    </div>
  );
}
