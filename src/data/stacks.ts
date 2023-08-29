import {
  framer,
  javascript,
  jest,
  react,
  scss,
  styled,
  typescript,
} from '@assets/images/stacks';
import { charity } from '@assets/images/paints';

type StackProps = {
  id: number;
  frame: string;
  scale: number;
  left: number;
  top: number;
};

const stacksData: Array<StackProps> = [
  { id: 1, frame: framer, scale: 16, left: 44, top: -3 },
  { id: 2, frame: charity, scale: 24, left: 32, top: 25 },
  { id: 3, frame: javascript, scale: 24, left: 0, top: 4 },
  { id: 4, frame: jest, scale: 14, left: 28, top: -1 },
  { id: 5, frame: react, scale: 12, left: 18, top: 0 },
  { id: 6, frame: scss, scale: 16, left: 49, top: 12 },
  { id: 7, frame: styled, scale: 14, left: 33, top: 12 },
  { id: 8, frame: typescript, scale: 20, left: 18, top: 12 },
];

export default stacksData;
