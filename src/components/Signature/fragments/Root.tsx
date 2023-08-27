import React, { CSSProperties } from 'react';

import * as S from '../styles';

type RootProps = {
  styles: CSSProperties;
  children: React.ReactNode;
};

export default function Root({ styles, children }: RootProps) {
  return (
    <S.SignatureWrapper
      style={styles}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </S.SignatureWrapper>
  );
}
