import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageWrapper = styled(motion.main)`
  display: flex;
  flex-flow: column;
`;

export const ErrorWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  height: 100vh;
  justify-content: center;
`;

export const ErrorElement = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 400;
  transition: 0.8s color;
`;
