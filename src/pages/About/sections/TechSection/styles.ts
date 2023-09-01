import { motion } from 'framer-motion';
import styled from 'styled-components';

type SquareProps = {
  $height?: string;
  $margin?: string;
  $radius?: string;
  $width?: string;
};

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-flow: row;
  height: 48rem;
  transition: 0.8s background-color;
  width: 100%;
`;

export const LeftWrapper = styled.div<SquareProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const Square = styled.div<SquareProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $radius }) => $radius};
  height: ${({ $height }) => $height};
  margin: ${({ $margin }) => $margin};
  transition: 0.8s background-color;
  width: 100%;
`;

export const RightWrapper = styled.div<SquareProps>`
  display: flex;
  flex-flow: row;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const Column = styled.div<SquareProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const PaintWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 2px;
  overflow: hidden;
  width: 100%;
`;

export const PaintElement = styled(motion.img)`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 14rem;
  line-height: 14rem;
  mix-blend-mode: difference;
  opacity: 0.75;
  padding: 1rem 2rem;
  pointer-events: none;
  position: absolute;
  width: 37%;
  word-wrap: break-word;
  z-index: 20;
`;
