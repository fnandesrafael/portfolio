import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type CustomMarginProps = {
  $margin?: string;
};

type SquareElementProps = {
  $radius?: string;
  $hasLine?: {
    rising: boolean;
    width: string;
    degrees: string;
  };
  $hasLineDown?: boolean;
  $degrees?: number;
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
  color: ${({ theme }) => (theme.title === 'dark' ? '#B3B0AA' : '#131313')};
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
  position: relative;
  transition: 0.8s background-color;
  width: 100%;

  ${({ $hasLine }) =>
    $hasLine &&
    css`
      &::before {
        content: '';
        position: absolute;

        ${$hasLine.rising &&
        css`
          bottom: 0;
        `}

        left: 0;
        width: ${$hasLine.width};
        height: 2px;
        background-color: ${({ theme }) => theme.colors.background};
        transform: translateY(100%) rotate(${$hasLine.degrees});
        transform-origin: left bottom;
        transition: 0.8s background-color;
      }
    `}
`;
