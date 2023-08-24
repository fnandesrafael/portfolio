import React from 'react';

import * as S from '../styles';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  return <S.NavigationWrapper>{children}</S.NavigationWrapper>;
}
