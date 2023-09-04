import styled from 'styled-components';

type ContainerProps = {
  $margin?: string;
  $radius?: string;
  $width?: string;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $radius }) => $radius};
  height: 100%;
  margin: ${({ $margin }) => $margin};
  transition: 0.8s background-color;
  width: ${({ $width }) => $width};
`;

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-flow: row;
  height: 12rem;
  transition: 0.8s background-color;
`;
