import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type ContainerProps = {
  $hasLine?: {
    rising: boolean;
    width: string;
    degrees: string;
  };
  $height?: string;
  $margin?: string;
  $radius?: string;
  $width?: string;
};

export const SectionWrapper = styled(motion.section)`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-flow: row;
  height: 36rem;
  transition: 0.8s background-color;
  width: 100%;
`;

export const LeftWrapper = styled(motion.div)<ContainerProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: 0 2px 0 0;
  width: ${({ $width }) => $width};
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

export const RightWrapper = styled(motion.div)<ContainerProps>`
  display: flex;
  flex-flow: row;
  height: 100%;
  width: ${({ $width }) => $width};
`;

export const Column = styled(motion.div)<ContainerProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const Container = styled(motion.div)<ContainerProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $radius }) => $radius};
  display: flex;
  flex-flow: column;
  height: ${({ $height }) => $height};
  justify-content: center;
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

export const Paragraph = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => (theme.title === 'dark' ? '#B3B0AA' : '#131313')};
  font-size: 1.5rem;
  margin-right: 4rem;
  padding: 1rem;
  transition: 0.8s color, 0.8s background-color;
  width: 100%;
  z-index: 0;
`;

export const BadgeElement = styled(motion.img)`
  height: 16rem;
`;
