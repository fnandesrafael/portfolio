import styled from 'styled-components';

type ContainerProps = {
  $height?: string;
  $margin?: string;
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
  height: ${({ $height }) => $height};
  margin: ${({ $margin }) => $margin};
  transition: 0.8s background-color;
  width: ${({ $width }) => $width};
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
