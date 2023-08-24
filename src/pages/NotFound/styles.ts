import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  height: 85%;
  justify-content: center;
  transition: 0.8s color;
`;

export const ErrorElement = styled(motion.h1)`
  font-size: 2rem;
`;
