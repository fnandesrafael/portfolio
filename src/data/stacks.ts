import {
  axios,
  css,
  docker,
  eslint,
  framer,
  html,
  javascript,
  jest,
  react,
  router,
  rtl,
  scss,
  styled,
  stylelint,
  typescript,
  vite,
} from '@assets/images/stacks';

type StackProps = {
  id: number;
  frame: string;
  scale: number;
  left: number;
  top: number;
};

const stacksData: Array<StackProps> = [
  { id: 1, frame: css, scale: 12, left: -1, top: 26 },
  { id: 2, frame: framer, scale: 16, left: 27.8, top: -3 },
  { id: 3, frame: html, scale: 12, left: 9, top: 26 },
  { id: 4, frame: rtl, scale: 22, left: 32.25, top: 24.5 },
  { id: 5, frame: javascript, scale: 24, left: 0, top: 4 },
  { id: 6, frame: jest, scale: 14, left: 33, top: 12 },
  { id: 7, frame: eslint, scale: 18, left: 18.8, top: 30.5 },
  { id: 8, frame: react, scale: 12, left: 18, top: 0 },
  { id: 9, frame: scss, scale: 16, left: 48.8, top: 12 },
  { id: 10, frame: styled, scale: 14, left: 40, top: -1 },
  { id: 11, frame: typescript, scale: 20, left: 18, top: 12 },
  { id: 12, frame: router, scale: 14, left: 48.8, top: 27.2 },
  { id: 13, frame: docker, scale: 16, left: 1.4, top: 37.8 },
  { id: 14, frame: stylelint, scale: 20, left: 18, top: 47 },
  { id: 15, frame: vite, scale: 18, left: 33.8, top: 45 },
  { id: 16, frame: axios, scale: 14, left: 48.8, top: 40 },
];

export default stacksData;
