import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ScrollWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  left: 50%;
  position: absolute;
  top: 75%;
  z-index: 10;
`;

export const IconElement = styled(motion.svg)`
  left: 50%;
  stroke: #fff;
  top: 75%;
  z-index: 1;

  circle {
    fill: #fff;
  }
`;
