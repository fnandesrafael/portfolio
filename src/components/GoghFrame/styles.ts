import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FrameWrapper = styled(motion.div)`
  @media screen and (height > 768px) {
    height: 30rem;
    top: 46%;
    width: 18rem;
  }

  border-radius: 12rem 12rem 0 0;
  display: flex;
  height: 21rem;
  justify-content: center;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 13rem;
  z-index: 10;
`;

export const PaintElement = styled(motion.img)`
  height: 32rem;
  object-fit: cover;
`;
