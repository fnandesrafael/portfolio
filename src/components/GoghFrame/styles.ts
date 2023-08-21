import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FrameWrapper = styled(motion.div)`
  border-radius: 10em 10em 0 0;
  display: flex;
  height: 50vh;
  justify-content: center;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 30vh;
  z-index: 10;
`;

export const PaintElement = styled(motion.img)`
  height: 65vh;
  object-fit: cover;
`;
