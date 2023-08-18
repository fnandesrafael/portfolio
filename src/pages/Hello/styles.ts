import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HelloContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.secundary};
  height: 110vh;
  transform-origin: top;
  width: 100%;
  z-index: 10;
`;

export const GreetingElement = styled(motion.h1)`
  color: ${(props) => props.theme.colors.textSecundary};
  font-size: 2.25em;
  font-weight: 100;
  left: 50%;
  position: absolute;
  top: 42%;
  transform: translate(-50%, -25%);
`;
