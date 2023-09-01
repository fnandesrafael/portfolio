import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type SquareProps = {
  $hasLine?: {
    rising: boolean;
    width: string;
    degrees: string;
  };
  $height: number;
  $margin?: string;
  $radius?: string;
};

type ColumnProps = {
  $margin?: string;
  $width: number;
};

export const SectionWrapper = styled(motion.section)`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-flow: row;
  height: 36rem;
  transition: 0.8s background-color;
  width: 100%;
`;

/**
 * Left Wrapper
 */

export const LeftWrapper = styled(motion.div)`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: 0 2px 0 0;
  width: 25%;
`;

export const PaintWrapper = styled.div`
  display: flex;
  height: 80%;
  overflow: hidden;
  width: 100%;
`;

export const PaintElement = styled(motion.img)`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

/**
 * Right Wrapper
 */

export const RightWrapper = styled(motion.div)`
  display: flex;
  flex-flow: row;
  height: 100%;
  width: 75%;
`;

export const Column = styled(motion.div)<ColumnProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width}%;
`;

export const Square = styled(motion.div)<SquareProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $radius }) => $radius};
  height: ${({ $height }) => $height}%;
  margin: ${({ $margin }) => $margin};
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
