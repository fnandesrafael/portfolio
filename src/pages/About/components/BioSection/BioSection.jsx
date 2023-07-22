import React from 'react';

import './BioSection.scss';

export default function BioSection() {
  return (
    <div className="bio-wrapper">
      <div className="bio-l-container">
        <p className="double-quote">&quot;</p>
        <p className="bio-text">
          I am a recently graduated web developer from Trybe, where I had the
          opportunity to learn and collaborate with amazing people and teams who
          helped me grow as a person and professional. My curiosity for computer
          graphics, design, semiotics, aesthetics, and ludology inspires me to
          create and design applications, exploring technologies that help me
          convey meaningful narratives, while taking the development process in
          a more artisanal way.
        </p>
      </div>
      <div className="bio-r-container">
        <div className="upper-r-containers">
          <div className="upper-l" />
          <div className="upper-r" />
        </div>
        <div className="bottom-r-containers">
          <div className="bottom-l" />
          <div className="bottom-r" />
        </div>
      </div>
    </div>
  );
}
