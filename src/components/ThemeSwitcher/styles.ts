import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SwitcherWrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: row;
  height: 2em;
  justify-content: space-around;
  margin: 0.5em;
  width: 2em;
`;

export const ToggleElement = styled.label`
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  height: 2.5em;
  justify-content: center;
  width: 2.5em;

  input {
    display: none;
  }
`;

export const IconElement = styled(motion.svg)`
  height: 1.75em;
  padding: 0.5em;
  width: 1.75em;
  fill: ${(props) => props.theme.colors.highlight};
`;
