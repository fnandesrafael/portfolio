import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageHeading = styled.h1`
  @media screen and (height > 768px) {
    font-size: 34.25rem;
  }

  display: flex;
  font-size: 25rem;
  font-weight: 400;
  left: -4rem;
  opacity: 0.025;
  pointer-events: none;
  position: absolute;
  top: -8rem;
  z-index: 0;
`;

export const PageWrapper = styled(motion.main)`
  display: flex;
  flex-flow: row;
  transition: 0.8s color;
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2rem;
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
  margin-bottom: 5rem;

  h2,
  h3,
  h5 {
    font-weight: 500;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h5 {
    @media screen and (height > 1080px) {
      font-size: 1.5rem;
    }

    color: ${({ theme }) => (theme.title === 'dark' ? '#B3B0AA' : '#131313')};
    font-size: 1.25rem;
    transition: 0.8s color;
  }
`;

export const RowContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 2px solid ${({ theme }) => theme.colors.background};
  transition: 0.8s border-right, 0.8s background-color;
  width: 20%;
`;
