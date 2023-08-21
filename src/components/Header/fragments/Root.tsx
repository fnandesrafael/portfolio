import React from 'react';
import useHeaderPresence from '@hooks/useHeaderPresence';

import * as S from '../styles';

type RootProps = {
  children: JSX.Element;
};

export default function Root({ children }: RootProps) {
  const { canShow } = useHeaderPresence();

  return (
    canShow && (
      <S.Header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
      >
        {children}
      </S.Header>
    )
  );
}
