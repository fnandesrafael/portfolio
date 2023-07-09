import React from 'react';

import './BioSection.scss';

export default function BioSection() {
  return (
    <div className="bio-wrapper">
      <div className="bio-l-container">
        <p className="bio-text">
          Sou um desenvolvedor web recém formado pela Trybe, onde tive a
          oportunidade de aprender e colaborar com pessoas e times incríveis,
          que me ajudaram a crescer como pessoa e profissional. Minha
          curiosidade por computação gráfica, design, semiótica, estética e
          ludologia me inspira a criar e desenhar aplicações, explorando
          tecnologias que me ajudem a transmitir narrativas significativas,
          levando o processo de desenvolvimento de um modo mais ou menos
          artesanal.
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
