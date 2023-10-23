import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavigationWrapper = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 8rem;
  padding: 2rem;
`;

export const NavText = styled.h1`
  font-size: 12rem;
  font-weight: 400;
  line-height: 125%;
  transition: 0.4s color;
  width: min-content;

  &:hover {
    color: ${({ theme }) => theme.colors.textTerciary};
    transition: 0.4s color;
  }
`;
