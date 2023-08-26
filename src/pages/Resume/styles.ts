import styled from 'styled-components';

export const PageWrapper = styled.main`
  display: flex;
  flex-flow: row;
  transition: 0.8s color;
`;

export const PageHeading = styled.h1`
  display: flex;
  font-size: 24rem;
  font-weight: 400;
  left: -4rem;
  opacity: 0.025;
  pointer-events: none;
  position: absolute;
  top: -8rem;
  z-index: 0;
`;

export const RowContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 2px solid ${({ theme }) => theme.colors.background};
  transition: 0.8s border-right, 0.8s background-color;
  width: 20%;
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4rem;
  margin-left: 8rem;
  padding: 4rem;
  width: 50%;
`;

export const ResumeHeading = styled.h2`
  font-size: 8rem;
  font-weight: 400;
`;

export const ResumeInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.75rem;
`;
