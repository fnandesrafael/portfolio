import React, { useLayoutEffect } from 'react';
import { EASE_SWEET } from '@constants/animations';
import { Navigator } from '@components/Navigator';
import { ScrollIcon } from '@components/ScrollIcon';

import * as S from './styles';

export default function NotFound() {
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
        <S.ErrorWrapper>
          <S.ErrorElement
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            Work In Progress
          </S.ErrorElement>
        </S.ErrorWrapper>

        <ScrollIcon.Root>
          <ScrollIcon.Icon />
        </ScrollIcon.Root>
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
