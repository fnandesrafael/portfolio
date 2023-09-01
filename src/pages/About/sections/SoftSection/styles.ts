import styled from 'styled-components';
import { motion } from 'framer-motion';

type SquareProps = {
  $height: number;
  $radius?: string;
};

type ColumnProps = {
  $width: number;
};

export const SectionWrapper = styled(motion.section)`
  border: 2px solid red;
  display: flex;
  flex-flow: row;
  height: 36rem;
  width: 100%;
`;

/**
 * Left Wrapper
 */

export const LeftWrapper = styled(motion.div)`
  border: 2px solid red;
  display: flex;
  flex-flow: column;
  height: 100%;
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
  border: 2px solid red;
  display: flex;
  flex-flow: row;
  height: 100%;
  width: 75%;
`;

export const Column = styled(motion.div)<ColumnProps>`
  border: 2px solid red;
  display: flex;
  flex-flow: column;
  height: 100%;
  width: ${({ $width }) => $width}%;
`;

export const Square = styled(motion.div)<SquareProps>`
  border: 2px solid red;
  border-radius: ${({ $radius }) => $radius};
  height: ${({ $height }) => $height}%;
  width: 100%;
`;

export default SectionWrapper;
