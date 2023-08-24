import styled from 'styled-components';
import { motion } from 'framer-motion';

type ElementProps = {
  $blend?: boolean;
};

export const Element = styled(motion.span)<ElementProps>`
  left: 0;
  letter-spacing: 0.25vw;
  margin-left: 2vw;
  mix-blend-mode: ${(props) => (props.$blend ? 'difference' : 'normal')};
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 8vw;
  z-index: calc(infinity);

  p {
    color: white;
    font-size: 1em;
  }
`;

export default Element;
