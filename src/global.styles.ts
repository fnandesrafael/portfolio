import styled, { createGlobalStyle } from 'styled-components';

import grungeTexture from './assets/images/grunge_texture.png';

export const Overall = createGlobalStyle`
  #root {
    height: 100vh;
    position: relative;
  }

  body {
    background-color: #B3B0AA;
    color: #131313;
    font-family: 'Bodoni Moda', serif;
    margin: 0;
    scroll-behavior: smooth;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  ::-webkit-scrollbar {
  display: none;
}
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 110vh;
  width: 100%;

  &::after {
    background-image: url(${grungeTexture});
    background-size: cover;
    content: '';
    height: 100%;
    left: 0;
    mix-blend-mode: luminosity;
    opacity: 0.15;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }
`;

export default Overall;
