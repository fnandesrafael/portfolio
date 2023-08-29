import { javascript } from '@assets/images/stacks';

type StackProps = {
  id: number;
  frame: string;
  scale: number;
  left: number;
  top: number;
  zIndex: number;
};

const stacksData: Array<StackProps> = [
  { id: 1, frame: javascript, scale: 24, left: 0, top: 4, zIndex: 10 },
];

export default stacksData;
