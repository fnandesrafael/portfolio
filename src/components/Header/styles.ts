import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderWrapper = styled(motion.header)`
  align-items: center;
  height: 3rem;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
`;

export default HeaderWrapper;
