import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SlideInElement = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transform-origin: top;
  width: 100%;
  z-index: 30;
`;

export const SlideOutElement = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transform-origin: bottom;
  width: 100%;
  z-index: 30;
`;
