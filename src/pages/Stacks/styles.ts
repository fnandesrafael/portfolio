import styled from 'styled-components';
import { motion } from 'framer-motion';

type StackElementProps = {
  $left: number;
  $scale: number;
  $top: number;
};

export const PageHeading = styled.h1`
  display: flex;
  font-size: 31rem;
  font-weight: 400;
  left: -4rem;
  opacity: 0.025;
  pointer-events: none;
  position: absolute;
  top: -12rem;
  z-index: 0;
`;

export const PageWrapper = styled(motion.main)`
  align-items: center;
  display: flex;
  flex-flow: column;
`;

export const StackElement = styled(motion.img)<StackElementProps>`
  height: ${({ $scale }) => $scale}rem;
  left: ${({ $left }) => $left}rem;
  position: absolute;
  top: ${({ $top }) => $top}rem;
  transform-origin: center;
  transition: 0.2s scale;

  &:hover {
    cursor: pointer;
    scale: 1.025;
    transition: 0.2s scale;
  }
`;

export const StacksWrapper = styled(motion.div)`
  height: 46rem;
  margin-left: 2.8rem;
  margin-top: 6rem;
  padding: 4rem;
  padding-bottom: 0;
  position: relative;
  width: 56rem;
`;
