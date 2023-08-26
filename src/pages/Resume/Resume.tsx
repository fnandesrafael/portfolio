import React from 'react';

import Navigation from '@components/Navigation';
import * as S from './styles';

export default function Resume() {
  return (
    <S.PageWrapper>
      <S.LeftContainer />

      <S.PageHeading>Resume</S.PageHeading>

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
    </S.PageWrapper>
  );
}
