import styled, { createGlobalStyle } from 'styled-components';

import grungeTexture from './assets/images/grunge_texture.png';

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
    scroll-behavior: smooth;
    position: relative;
    transition: 0.8s background-color;

    &::after {
      background-image: ${`url(${grungeTexture})`};
      background-size: cover;
      background-repeat: repeat-y;
      content: '';
      height: 100%;
      left: 0;
      mix-blend-mode: luminosity;
      opacity: 0.1;
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

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-flow: column;
  transition: 0.8s background-color;
  width: 100%;
`;

export default Overall;
