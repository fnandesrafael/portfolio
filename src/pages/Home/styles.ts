import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BadgeElement = styled(motion.img)`
  @media screen and (height > 768px) {
    height: 16rem;
    margin-right: 22rem;
    top: 14rem;
  }

  height: 11.5rem;
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
