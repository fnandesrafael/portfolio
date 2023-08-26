import React, { useLayoutEffect } from 'react';
import { Navigator } from '@components/Navigator';

import * as S from './styles';

export default function NotFound() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.PageWrapper>
        <S.ErrorWrapper>
          <S.ErrorElement
            className="not-found-code"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            404
          </S.ErrorElement>
        </S.ErrorWrapper>
      </S.PageWrapper>

      <Navigator.Root>
        <Navigator.NavLink props={{ page: '/home' }}>Home</Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/about' }}>About</Navigator.NavLink>
        <Navigator.NavLink props={{ page: '/resume' }}>
          Resume
        </Navigator.NavLink>
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
