import React, { useEffect } from 'react';

import './About.scss';

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('overflow');
    }, 200);
  }, []);

  return (
    <div className="about-wrapper">
      <h1
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Lorem Ipsum
      </h1>
    </div>
  );
}
