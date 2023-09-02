import styled from 'styled-components';

type ContainerProps = {
  $width: string;
};

export const SectionWrapper = styled.section`
  border: 1px solid red;
  display: flex;
  height: 26rem;
  width: 100%;
`;

export const Column = styled.div<ContainerProps>`
  border: 1px solid red;
  display: flex;
  flex-flow: column;
  height: 100%;
  width: ${({ $width }) => $width};
`;
