import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderWrapper = styled(motion.header)`
  align-items: center;
  display: flex;
  flex-flow: row-reverse;
  height: 4rem;
  justify-content: center;
  position: fixed;
  right: 2rem;
  top: 1rem;
  z-index: 20;
`;

export default HeaderWrapper;
