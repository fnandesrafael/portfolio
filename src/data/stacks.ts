import { javascript, jest, react, typescript } from '@assets/images/stacks';

type StackProps = {
  id: number;
  frame: string;
  scale: number;
  left: number;
  top: number;
};

const stacksData: Array<StackProps> = [
  { id: 1, frame: javascript, scale: 24, left: 0, top: 4 },
  { id: 1, frame: jest, scale: 14, left: 28, top: -1 },
  { id: 2, frame: react, scale: 12, left: 18, top: 0 },
  { id: 2, frame: typescript, scale: 20, left: 18, top: 12 },
];

export default stacksData;
