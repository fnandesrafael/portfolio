import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TextElement = styled(motion.span)`
  color: white;
  font-size: 1em;
  left: 0;
  letter-spacing: 0.25vw;
  margin-left: 2vw;
  mix-blend-mode: difference;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 8vw;
  z-index: 10;
`;

export default TextElement;
