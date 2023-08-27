import React, { useLayoutEffect } from 'react';
import { EASE_SWEET } from '@constants/animations';
import { Navigator } from '@components/Navigator';
import stacks from '@assets/images/stacks.png';

import * as S from './styles';

export default function Stacks() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.PageWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: EASE_SWEET }}
      >
        <S.StacksElement src={stacks} alt="" />
      </S.PageWrapper>

      <Navigator.Root>
        <Navigator.NavLink page="/home">Home</Navigator.NavLink>
        <Navigator.NavLink page="/about">About</Navigator.NavLink>
        <Navigator.NavLink page="/resume">Resume</Navigator.NavLink>
        <Navigator.NavLink page="/projects">Projects</Navigator.NavLink>
      </Navigator.Root>
    </>
  );
}
