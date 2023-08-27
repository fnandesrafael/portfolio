import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageWrapper = styled(motion.main)`
  align-items: center;
  display: flex;
  flex-flow: column;
`;

export const StacksElement = styled.img`
  padding: 4rem;
  pointer-events: none;
  width: 60rem;
`;
