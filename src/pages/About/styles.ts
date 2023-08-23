import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BadgeElement = styled(motion.img)`
  height: 8rem;
  margin-left: -5.25rem;
  margin-top: -3.5rem;
`;

export default PageWrapper;
