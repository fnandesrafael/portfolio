import styled from 'styled-components';
import { motion } from 'framer-motion';

type SignatureWrapperProps = {
  subheading?: boolean;
};

export const SignatureWrapper = styled(motion.div)<SignatureWrapperProps>`
  @media screen and (height > 768px) {
    font-size: ${({ subheading }) => (subheading ? '6.5rem' : '10rem')};
    margin-top: ${({ subheading }) => (subheading ? 0 : '7rem')};
    width: 70rem;
  }

  font-size: 6.5rem;
  width: 65rem;

  span {
    display: inline-block;
  }
`;

export default SignatureWrapper;
