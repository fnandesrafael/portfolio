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
  height: 52rem;
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
  display: flex;
  flex-flow: column;
  height: ${({ $height }) => $height};
  justify-content: center;
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

export const Heading = styled.h1`
  color: #fff;
  font-size: 15rem;
  font-weight: 400;
  line-height: 14rem;
  mix-blend-mode: difference;
  opacity: 0.75;
  padding-left: 3.5rem;
  padding-top: 3.5rem;
  pointer-events: none;
  position: absolute;
  width: 37%;
  word-wrap: break-word;
  z-index: 20;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => (theme.title === 'dark' ? '#B3B0AA' : '#131313')};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  padding: 1rem;
  text-align: end;
  transition: 0.8s color, 0.8s background-color;
  width: 140%;
  z-index: 0;
`;
