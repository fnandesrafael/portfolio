import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled.section`
  height: 100vh;
  z-index: 10;
`;

export const SubHeading = styled(motion.h2)`
  @media screen and (height > 768px) {
    font-size: 2rem;
    width: 28rem;
  }

  font-size: 1.15rem;
  font-weight: 200;
  letter-spacing: 0.15rem;
  width: 18rem;
`;

export const TextWrapper = styled.div`
  align-items: 'flex-start';
  color: ${({ theme }) => (theme.title === 'dark' ? '#d9d9d9' : '#131313')};
  display: flex;
  flex-flow: column;
  gap: 0.75rem;
  left: 2rem;
  padding: 2rem;
  position: absolute;
  top: 8rem;
  transition: 1s;
  z-index: 10;
`;
