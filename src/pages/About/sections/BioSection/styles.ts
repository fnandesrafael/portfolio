import styled from 'styled-components';
import { motion } from 'framer-motion';

type CustomMarginProps = {
  $margin?: string;
};

type SquareElementProps = {
  $radius?: string;
} & CustomMarginProps;

export const SectionWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  height: 36rem;
  position: relative;
  transition: background-color 0.8s;
  z-index: 10;
`;

export const ResumeContainer = styled.div<CustomMarginProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: ${(props) => props.$margin};
  width: 65%;
`;

export const QuoteElement = styled(motion.svg)`
  left: 2rem;
  position: absolute;
  top: -1rem;
  width: 10rem;

  path {
    fill: ${(props) => props.theme.colors.background};
    transition: 0.8s;
  }
`;

export const ResumeElement = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
  padding: 2rem;
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
  margin: ${(props) => props.$margin};
`;

export const SquareElement = styled.div<SquareElementProps>`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.$radius};
  height: 100%;
  margin: ${(props) => props.$margin};
  width: 100%;
`;
