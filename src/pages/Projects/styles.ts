import styled from 'styled-components';
import { motion } from 'framer-motion';
import projects from '@assets/images/projects.png';

export const PageWrapper = styled(motion.main)`
  @media screen and (height > 768px) {
    margin-bottom: 6rem;
    margin-top: 18rem;
    scale: 1.4;
  }

  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-top: 6rem;
  transition: 0.6s color;
`;

export const Preview = styled.div`
  height: 250px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  transform: scale(0);
  transform-origin: center;
  width: 250px;
  z-index: 10;
`;

export const PreviewImage = styled.img`
  background: ${`url(${projects})`};
  background-position: 0 0;
  background-size: cover;
  height: 100%;
  pointer-events: none;
  width: 100%;
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 100%;
  text-transform: uppercase;
`;

export const HeaderParagraph = styled(Paragraph)`
  opacity: 0.5;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 97%;
`;

export const Projects = styled.div`
  display: flex;
  flex-flow: column;
  width: 70%;
`;

export const Project = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.background}`};
  cursor: pointer;
  display: flex;
  padding: 2.5rem 1rem;
  transition: 0.6s border-bottom, 0.6s opacity;
  width: 100%;

  &:hover {
    opacity: 0.5;
  }

  & > div {
    flex: 3;
  }

  & div:last-child {
    flex: 1;
  }
`;

export const Header = styled(Project)`
  cursor: default;

  &:hover {
    opacity: 1;
  }
`;

export const PageHeading = styled.h1`
  @media screen and (height > 768px) {
    font-size: 42rem;
    top: -16rem;
  }

  display: flex;
  font-size: 24.25rem;
  font-weight: 400;
  left: -4rem;
  opacity: 0.025;
  pointer-events: none;
  position: absolute;
  top: -10rem;
  z-index: 0;
`;
