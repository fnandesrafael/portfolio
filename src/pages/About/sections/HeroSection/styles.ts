import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled.section`
  height: 100vh;
`;

export const TextWrapper = styled.div`
  align-items: 'flex-start';
  color: ${(props) => (props.theme.title === 'dark' ? '#d9d9d9' : '#131313')};
  display: flex;
  flex-flow: column;
  gap: 0.75rem;
  left: 2rem;
  padding: 2rem;
  position: absolute;
  top: 6rem;
  transition: 1s;
  z-index: 10;
`;

export const SubHeading = styled(motion.h2)`
  font-size: 1.15rem;
  font-weight: 200;
  letter-spacing: 0.15rem;
  width: 18rem;
`;
