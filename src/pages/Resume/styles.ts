import styled from 'styled-components';

export const PageWrapper = styled.main`
  display: flex;
  flex-flow: column;
  transition: 0.8s color;
`;

export const PageHeading = styled.h1`
  display: flex;
  font-size: 24rem;
  font-weight: 400;
  left: -4rem;
  opacity: 0.025;
  position: absolute;
  top: -8rem;
  z-index: 0;
`;

export const LeftContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 2px solid ${({ theme }) => theme.colors.background};
  height: 100vh;
  transition: 0.8s border-right, 0.8s background-color;
  width: 20%;
`;
