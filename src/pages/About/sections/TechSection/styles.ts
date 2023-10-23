import { motion } from 'framer-motion';
import styled from 'styled-components';

type ContainerProps = {
  $height?: string;
  $margin?: string;
  $radius?: string;
  $width?: string;
};

export const Column = styled.div<ContainerProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const Container = styled.div<ContainerProps>`
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

export const Heading = styled.h1`
  @media screen and (height > 768px) {
    width: 32%;
  }

  color: #fff;
  font-size: 15rem;
  font-weight: 400;
  line-height: 14rem;
  mix-blend-mode: difference;
  opacity: 0.75;
  padding-left: 4.25rem;
  padding-top: 3.5rem;
  pointer-events: none;
  position: absolute;
  width: 42%;
  word-wrap: break-word;
  z-index: 20;
`;

export const LeftWrapper = styled.div<ContainerProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const PaintElement = styled(motion.img)`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const PaintWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 2px;
  overflow: hidden;
  width: 100%;
`;

export const Paragraph = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => (theme.title === 'dark' ? '#B3B0AA' : '#131313')};
  font-size: 1.5rem;
  margin-left: 1rem;
  padding: 1rem;
  text-align: end;
  transition: 0.8s color, 0.8s background-color;
  width: 125%;
  z-index: 0;
`;

export const RightWrapper = styled.div<ContainerProps>`
  display: flex;
  flex-flow: row;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-flow: row;
  height: 52rem;
  transition: 0.8s background-color;
  width: 100%;
`;
