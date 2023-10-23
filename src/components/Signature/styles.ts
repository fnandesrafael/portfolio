import styled from 'styled-components';
import { motion } from 'framer-motion';

type SignatureWrapperProps = {
  subheading?: boolean
}

export const SignatureWrapper = styled(motion.div)<SignatureWrapperProps>`
  @media screen and (height > 768px) {
    margin-top: ${({subheading}) => subheading ? 0 : '7rem'};
    font-size: ${({subheading}) => subheading ? '6.5rem' : '10rem'};
  }

  font-size: 6.5rem;
  width: 65rem;

  span {
    display: inline-block;
  }
`;

export default SignatureWrapper;
