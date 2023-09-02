import styled, { createGlobalStyle } from 'styled-components';

import grungeTexture from './assets/images/grunge_texture.png';

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-flow: column;
  transition: 0.8s background-color;
  width: 100%;
`;

export const Overall = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: 'Bodoni Moda', serif;
    position: relative;
    scroll-behavior: smooth;
    transition: 0.8s background-color;

    &::after {
      background-image: ${`url(${grungeTexture})`};
      background-repeat: repeat-y;
      background-size: cover;
      content: '';
      height: 100%;
      left: 0;
      mix-blend-mode: luminosity;
      opacity: 0.15;
      pointer-events: none;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  ::-webkit-scrollbar {
  display: none;
}
`;
