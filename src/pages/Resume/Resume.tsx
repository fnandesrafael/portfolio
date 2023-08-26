import React, { useLayoutEffect } from 'react';
import resumeData from '@data/resume';

import { Navigator } from '@components/Navigator';

import * as S from './styles';

export default function Resume() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.PageWrapper>
        <S.RowContainer />

        <S.PageHeading>Resume</S.PageHeading>

        <S.ResumeContainer>
          <section>
            <S.ResumeHeading>Education</S.ResumeHeading>
            {resumeData.educations.map((education) => (
              <S.ResumeInfo>
                <h3>{education.period}</h3>
                <h2>{education.title}</h2>
                <h5>{education.location}</h5>
              </S.ResumeInfo>
            ))}
          </section>

          <section>
            <S.ResumeHeading>Jobs</S.ResumeHeading>
            {resumeData.jobs.map((job) => (
              <S.ResumeInfo>
                <h3>{job.period}</h3>
                <h2>{job.title}</h2>
                <h5>{job.location}</h5>
              </S.ResumeInfo>
            ))}
          </section>
        </S.ResumeContainer>
      </S.PageWrapper>

      <Navigator.Root>
        <Navigator.NavLink props={{ page: '/home' }}>Home</Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/about' }}>About</Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/stacks' }}>
          Stacks
        </Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/projects' }}>
          Projects
        </Navigator.NavLink>
      </Navigator.Root>
    </>
  );
}
