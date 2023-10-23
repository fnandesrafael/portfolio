import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  flex-direction: column;
  height: ${({ $height }) => $height};
  justify-content: center;
  margin: ${({ $margin }) => $margin};
  transition: 0.8s background-color;
  width: ${({ $width }) => $width};
`;

export const Heading = styled.h1`
  font-size: 8rem;
  font-weight: 400;
  margin-right: 1rem;
  text-align: center;
  transform: rotate(-90deg);
  transition: 0.8s color;
`;

export const PaintElement = styled(motion.img)`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const PaintWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const Paragraph = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => (theme.title === 'dark' ? '#B3B0AA' : '#131313')};
  font-size: 1.5rem;
  padding: 2rem;
  padding-right: 0;
  transition: 0.8s color, 0.8s background-color;
  width: 93%;
  z-index: 0;
`;

export const Row = styled.div<ContainerProps>`
  display: flex;
  flex-flow: row;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
`;

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  height: 46rem;
  transition: 0.8s background-color;
  width: 100%;
`;
