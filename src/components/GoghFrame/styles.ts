import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FrameWrapper = styled(motion.div)`
  border-radius: 12rem 12rem 0 0;
  display: flex;
  height: 24vw;
  justify-content: center;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 14vw;
  z-index: 10;
`;

export const PaintElement = styled(motion.img)`
  height: 32rem;
  object-fit: cover;
`;
