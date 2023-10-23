import styled from 'styled-components';
import { motion } from 'framer-motion';

type StackElementProps = {
  $left: number;
  $scale: number;
  $top: number;
};

export const PageHeading = styled.h1`
  @media screen and (height > 768px) {
    font-size: 42rem;
    top: -16rem;
  }

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
  @media screen and (height > 768px) {
    margin-bottom: 22rem;
    margin-left: 2.35rem;
    margin-top: 24rem;
    scale: 1.5;
  }

  height: 58rem;
  margin-left: 2.2rem;
  margin-top: 6rem;
  padding: 4rem;
  padding-bottom: 0;
  position: relative;
  width: 56rem;
`;
