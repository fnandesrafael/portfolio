import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BadgeElement = styled(motion.img)`
  height: 28vh;
  margin-right: 15rem;
  pointer-events: none;
  position: absolute;
  top: 7rem;
  transform-origin: center;
  z-index: 20;
`;

export const PageWrapper = styled(motion.main)`
  align-items: center;
  display: flex;
  flex-flow: column;
  transition: 0.8s color;
`;
