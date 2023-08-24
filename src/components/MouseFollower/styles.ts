import styled from 'styled-components';
import { motion } from 'framer-motion';

type ElementProps = {
  $blend?: boolean;
};

export const Element = styled(motion.span)<ElementProps>`
  left: 0;
  letter-spacing: 0.25rem;
  mix-blend-mode: ${({ $blend }) => ($blend ? 'difference' : 'normal')};
  pointer-events: none;
  position: fixed;
  top: 0;
  z-index: calc(infinity);

  p {
    color: white;
    font-size: 1em;
    margin-left: 2rem;
    margin-top: 1rem;
    width: 7rem;
  }
`;

export default Element;
