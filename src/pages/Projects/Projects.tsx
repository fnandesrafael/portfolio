import React, { useLayoutEffect } from 'react';
import { EASE_SWEET } from '@constants/animations';
import { Navigator } from '@components/Navigator';

import * as S from './styles';

export default function Projects() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    document.body.style.cssText = 'overflow-x: hidden';

    return () => {
      document.body.style.cssText = 'overflow-x: auto';
    };
  }, []);

  return (
    <>
      <S.PageWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE_SWEET }}
      >
        <S.PageHeading>Projects</S.PageHeading>

        <S.Container>
          <S.Projects>
            <S.Header>
              <div>
                <S.HeaderParagraph>Project</S.HeaderParagraph>
              </div>
              <div>
                <S.HeaderParagraph>Category</S.HeaderParagraph>
              </div>
              <div>
                <S.HeaderParagraph>Stack</S.HeaderParagraph>
              </div>
              <div>
                <S.HeaderParagraph>Year</S.HeaderParagraph>
              </div>
            </S.Header>
            <a href="https://openshopio.vercel.app/" target="_blank">
              <S.Project id="p1">
                <div>
                  <S.Paragraph>Openshop</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>E-commerce</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>Frontend</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>2023</S.Paragraph>
                </div>
              </S.Project>
            </a>
            <a href="https://memoryboardio.vercel.app" target="_blank">
              <S.Project id="p2">
                <div>
                  <S.Paragraph>Memory Board</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>Tool</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>Frontend</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>2023</S.Paragraph>
                </div>
              </S.Project>
            </a>
            <a href="https://weatherappio.vercel.app" target="blank">
              <S.Project id="p3">
                <div>
                  <S.Paragraph>Weather App</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>Tool</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>Frontend</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>2023</S.Paragraph>
                </div>
              </S.Project>
            </a>
            <a href="https://www.npmjs.com/package/parrotenv" target="_blank">
              <S.Project id="p4">
                <div>
                  <S.Paragraph>ParrotEnv</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>Framework</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>Backend</S.Paragraph>
                </div>
                <div>
                  <S.Paragraph>2023</S.Paragraph>
                </div>
              </S.Project>
            </a>
          </S.Projects>
        </S.Container>
      </S.PageWrapper>

      <Navigator.Root>
        <Navigator.NavLink page="/home">Home</Navigator.NavLink>
        <Navigator.NavLink page="/about">About</Navigator.NavLink>
        <Navigator.NavLink page="/resume">Resume</Navigator.NavLink>
        <Navigator.NavLink page="/stacks">Stacks</Navigator.NavLink>
      </Navigator.Root>
    </>
  );
}
