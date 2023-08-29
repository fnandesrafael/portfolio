import styled from 'styled-components';
import { motion } from 'framer-motion';

type StackElementProps = {
  $left: number;
  $scale: number;
  $top: number;
};

export const PageWrapper = styled(motion.main)`
  align-items: center;
  display: flex;
  flex-flow: column;
`;

export const StacksWrapper = styled(motion.div)`
  /* border: 1px solid; */
  border-color: ${({ theme }) => theme.colors.background};
  height: 60rem;
  margin-top: 4rem;
  padding: 4rem;
  position: relative;
  width: 60rem;
`;

export const StackElement = styled(motion.img)<StackElementProps>`
  height: ${({ $scale }) => $scale}rem;
  left: ${({ $left }) => $left}rem;
  position: absolute;
  top: ${({ $top }) => $top}rem;
`;
