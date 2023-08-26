import React, { useLayoutEffect } from 'react';
import resumeData from '@data/resume';

import Navigation from '@components/Navigation';

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
      <Navigation.Root>
        <Navigation.NavLink props={{ page: '/home' }}>Home</Navigation.NavLink>
        <Navigation.NavLink props={{ page: '/about' }}>
          About
        </Navigation.NavLink>
        <Navigation.NavLink props={{ page: '/stacks' }}>
          Stacks
        </Navigation.NavLink>
        <Navigation.NavLink props={{ page: '/projects' }}>
          Projects
        </Navigation.NavLink>
      </Navigation.Root>
    </>
  );
}
