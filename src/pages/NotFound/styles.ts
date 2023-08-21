import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NotFoundWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  height: 85%;
  justify-content: center;
`;

export const ErrorElement = styled(motion.h1)`
  font-size: 2rem;
`;

export default NotFoundWrapper;
