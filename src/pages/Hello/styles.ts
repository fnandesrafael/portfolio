import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GreetingElement = styled(motion.h1)`
  @media screen and (height > 768px) {
    font-size: 2.5rem;
  }

  color: ${({ theme }) => theme.colors.textSecundary};
  font-size: 2rem;
  font-weight: 100;
  left: 50%;
  position: absolute;
  top: 42%;
  transform: translate(-50%, -25%);
`;

export const HelloContainer = styled(motion.div)`
  background-color: ${({ theme }) =>
    theme.title === 'dark' ? '#B3B0AA' : '#131313'};
  height: 110vh;
  transform-origin: top;
  width: 100%;
  z-index: 10;
`;
