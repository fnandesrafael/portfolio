import styled from 'styled-components';

type SquareProps = {
  $height?: string;
  $margin?: string;
  $radius?: string;
  $width?: string;
};

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-flow: row;
  height: 52rem;
  width: 100%;
`;

export const LeftWrapper = styled.div<SquareProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const Square = styled.div<SquareProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $radius }) => $radius};
  height: ${({ $height }) => $height};
  margin: ${({ $margin }) => $margin};
  width: 100%;
`;

export const RightWrapper = styled.div<SquareProps>`
  display: flex;
  flex-flow: row;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;

export const Column = styled.div<SquareProps>`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
`;
