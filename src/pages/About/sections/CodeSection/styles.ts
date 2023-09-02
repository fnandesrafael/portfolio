import styled from 'styled-components';

type ContainerProps = {
  $height?: string;
  $width?: string;
};

export const SectionWrapper = styled.section`
  border: 1px solid red;
  display: flex;
  height: 46rem;
  width: 100%;
`;

export const Column = styled.div<ContainerProps>`
  border: 1px solid red;
  display: flex;
  flex-flow: column;
  height: 100%;
  width: ${({ $width }) => $width};
`;

export const Row = styled.div<ContainerProps>`
  border: 1px solid red;
  display: flex;
  flex-flow: row;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
`;

export const Container = styled.div<ContainerProps>`
  border: 1px solid red;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
`;
