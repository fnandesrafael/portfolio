import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SwitcherWrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: row;
  height: 2rem;
  justify-content: space-around;
  margin: 0.5rem;
  width: 2rem;
`;

export const ToggleElement = styled.label`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  width: 2.5rem;

  input {
    display: none;
  }
`;

export const IconElement = styled(motion.svg)`
  fill: ${({ theme }) => theme.colors.highlight};
  height: 2rem;
  padding: 0.5rem;
  width: 2rem;
`;
