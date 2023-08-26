import React from 'react';

import Navigation from '@components/Navigation';

import * as S from './styles';

export default function Resume() {
  return (
    <>
      <S.PageWrapper>
        <S.RowContainer />

        <S.PageHeading>Resume</S.PageHeading>

        <S.ResumeContainer>
          <section>
            <S.ResumeHeading>Education</S.ResumeHeading>
            <S.ResumeInfo>
              <h3>2002 - 2023</h3>
              <h2>Vida Intelectual</h2>
              <h5>at República do Brasil</h5>
            </S.ResumeInfo>
          </section>

          <section>
            <S.ResumeHeading>Jobs</S.ResumeHeading>
            <S.ResumeInfo>
              <h3>2002 - 2023</h3>
              <h2>Vida Intelectual</h2>
              <h5>at República do Brasil</h5>
            </S.ResumeInfo>
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
