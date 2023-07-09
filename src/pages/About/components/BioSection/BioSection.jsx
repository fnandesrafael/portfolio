import React from 'react';

import './BioSection.scss';

export default function BioSection() {
  return (
    <div className="bio-wrapper">
      <div className="bio-l-container"></div>
      <div className="bio-r-container">
        <div className="upper-r-containers">
          <div className="upper-l"></div>
          <div className="upper-r"></div>
        </div>
        <div className="bottom-r-containers">
          <div className="bottom-l"></div>
          <div className="bottom-r"></div>
        </div>
      </div>
    </div>
  );
}
