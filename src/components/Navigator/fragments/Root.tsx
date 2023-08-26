import React from 'react';
import { EASE_SWEET } from '@constants/animations';

import * as S from '../styles';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  return (
    <S.NavigationWrapper
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: EASE_SWEET }}
    >
      {children}
    </S.NavigationWrapper>
  );
}
