import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type ContainerProps = {
  $hasLine?: {
    rising: boolean;
    width: string;
    degrees: string;
  };
  $margin?: string;
  $radius?: string;
};

export const BioContainer = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $radius }) => $radius};
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: ${({ $margin }) => $margin};
  transition: 0.8s background-color;
  width: 65%;
`;

export const BioText = styled.p`
  color: ${({ theme }) => (theme.title === 'dark' ? '#B3B0AA' : '#131313')};
  font-size: 1.5rem;
  margin-top: 2rem;
  padding: 2rem;
  transition: 0.8s color;
  width: 85%;
`;

export const Container = styled.div<ContainerProps>`
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
        background-color: ${({ theme }) => theme.colors.background};
        content: '';
        height: 2px;

        ${$hasLine.rising &&
        css`
          bottom: 0;
        `}

        left: 0;
        position: absolute;
        transform: translateY(100%) rotate(${$hasLine.degrees});
        transform-origin: left bottom;
        transition: 0.8s background-color;
        width: ${$hasLine.width};
      }
    `}
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

export const RightWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 35%;
`;

export const RowWrapper = styled.div<ContainerProps>`
  display: flex;
  flex-flow: row;
  height: 100%;
  margin: ${({ $margin }) => $margin};
`;

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  height: 36rem;
  position: relative;
  transition: background-color 0.8s;
  z-index: 10;
`;
