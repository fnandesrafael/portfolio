import React, { useLayoutEffect } from 'react';
import { Navigation } from '@components/Navigation';

import * as S from './styles';

export default function NotFound() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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

      <Navigation.Root>
        <Navigation.NavLink props={{ page: '/home' }}>Home</Navigation.NavLink>
        <Navigation.NavLink props={{ page: '/about' }}>
          About
        </Navigation.NavLink>
        <Navigation.NavLink props={{ page: '/resume' }}>
          Resume
        </Navigation.NavLink>
      </Navigation.Root>
    </S.PageWrapper>
  );
}
