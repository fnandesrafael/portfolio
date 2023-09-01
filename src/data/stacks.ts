import {
  css,
  framer,
  html,
  javascript,
  jest,
  react,
  scss,
  styled,
  typescript,
} from '@assets/images/stacks';
import { charity } from '@assets/images/paints';
import oldFrame from '@assets/images/old_frame.png';

type StackProps = {
  id: number;
  frame: string;
  scale: number;
  left: number;
  top: number;
};

const stacksData: Array<StackProps> = [
  { id: 1, frame: css, scale: 12, left: 0, top: 26 },
  { id: 2, frame: framer, scale: 16, left: 27.8, top: -3 },
  { id: 3, frame: html, scale: 12, left: 9, top: 26 },
  { id: 4, frame: charity, scale: 22, left: 32.25, top: 24.5 },
  { id: 5, frame: javascript, scale: 24, left: 0, top: 4 },
  { id: 6, frame: jest, scale: 14, left: 33, top: 12 },
  { id: 7, frame: oldFrame, scale: 18, left: 18.5, top: 30.5 },
  { id: 8, frame: react, scale: 12, left: 18, top: 0 },
  { id: 9, frame: scss, scale: 16, left: 48.8, top: 12 },
  { id: 10, frame: styled, scale: 14, left: 40, top: -1 },
  { id: 11, frame: typescript, scale: 20, left: 18, top: 12 },
  { id: 12, frame: oldFrame, scale: 16, left: 48.8, top: 26.8 },
];

export default stacksData;
