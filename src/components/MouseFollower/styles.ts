import styled from 'styled-components';
import { motion } from 'framer-motion';

type ElementProps = {
  isText: boolean;
};

export const Element = styled(motion.span)<ElementProps>`
  left: 0;
  letter-spacing: 0.25vw;
  margin-left: 2vw;
  mix-blend-mode: ${(props) => (props.isText ? 'difference' : 'normal')};
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 8vw;
  z-index: calc(infinity);

  p {
    font-size: 1em;
    color: white;
  }
`;

export default Element;
