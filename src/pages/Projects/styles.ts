import styled from 'styled-components';
import { motion } from 'framer-motion';
import projects from '@assets/images/projects.png';

export const PageWrapper = styled(motion.main)`
  @media screen and (height > 768px) {
    margin-top: 18rem;
    margin-bottom: 6rem;
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
  width: 100%;
  height: 100%;
  background: ${`url(${projects})`};
  background-size: cover;
  background-position: 0 0;
  pointer-events: none;
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
  width: 70%;
  flex-flow: column;
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
    top: -16rem;
    font-size: 42rem;
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
