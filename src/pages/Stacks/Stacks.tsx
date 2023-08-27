import React, { useLayoutEffect } from 'react';
import { Navigator } from '@components/Navigator';
import stacks from '@assets/images/stacks.png';

import * as S from './styles';

export default function Stacks() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.PageWrapper>
        <S.StacksElement src={stacks} alt="" />
      </S.PageWrapper>

      <Navigator.Root>
        <Navigator.NavLink props={{ page: '/home' }}>Home</Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/about' }}>About</Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/resume' }}>
          Resume
        </Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/projects' }}>
          Projects
        </Navigator.NavLink>
      </Navigator.Root>
    </>
  );
}
