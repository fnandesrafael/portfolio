import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageWrapper = styled(motion.main)`
  align-items: center;
  display: flex;
  flex-flow: column;
`;

export const StacksWrapper = styled(motion.img)`
  height: 60rem;
  padding: 4rem;
  width: 60rem;
`;
