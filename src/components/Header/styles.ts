import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled(motion.header)`
  align-items: center;
  height: 3em;
  padding: 1.5em 2em;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
`;

export default Header;
