import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderWrapper = styled(motion.header)`
  align-items: center;
  display: flex;
  flex-flow: row-reverse;
  height: 4rem;
  justify-items: center;
  padding: 2rem;
  position: fixed;
  width: 100%;
  z-index: 20;
`;

export default HeaderWrapper;
