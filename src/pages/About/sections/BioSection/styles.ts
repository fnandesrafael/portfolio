import styled from 'styled-components';
import { motion } from 'framer-motion';

type CustomMarginProps = {
  $margin?: string;
};

type SquareElementProps = {
  $radius?: string;
} & CustomMarginProps;

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  height: 36rem;
  position: relative;
  transition: background-color 0.8s;
  z-index: 10;
`;

export const BioContainer = styled.div<CustomMarginProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: ${({ $margin }) => $margin};
  transition: 0.8s background-color;
  width: 65%;
`;

export const QuoteElement = styled(motion.svg)`
  left: 2rem;
  position: absolute;
  top: -1rem;
  width: 10rem;

  path {
    fill: ${({ theme }) => theme.colors.background};
    transition: 0.8s;
  }
`;

export const BioText = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
  padding: 2rem;
  transition: 0.8s color;
  width: 85%;
`;

export const SquaresWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 35%;
`;

export const RowWrapper = styled.div<CustomMarginProps>`
  display: flex;
  flex-flow: row;
  height: 100%;
  margin: ${({ $margin }) => $margin};
`;

export const SquareElement = styled.div<SquareElementProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $radius }) => $radius};
  height: 100%;
  margin: ${({ $margin }) => $margin};
  transition: 0.8s background-color;
  width: 100%;
`;
