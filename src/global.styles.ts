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
    font-family: 'Bodoni Moda', serif;
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
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textPrimary};
  display: flex;
  flex-flow: column;
  height: 110vh;
  transition: 0.8s;
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
    z-index: 0;
  }
`;

export default Overall;
