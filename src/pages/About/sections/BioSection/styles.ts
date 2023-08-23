import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  height: 36rem;
  position: relative;
  transition: background-color 0.8s;
  z-index: 10;
`;

export const LeftContainer = styled.div`
  align-items: left;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 2px;
  margin-left: 0;
  margin-top: 0;
  width: 65%;
`;

export const QuoteElement = styled(motion.svg)`
  left: 2rem;
  position: absolute;
  top: -2rem;
  width: 12rem;

  path {
    fill: ${(props) => props.theme.colors.background};
    transition: 0.8s;
  }
`;

export const ResumeElement = styled.p`
  font-size: 1.5rem;
  padding: 2rem;
`;
