import React, { CSSProperties } from 'react';

import * as S from '../styles';

type RootProps = {
  props: { styles: CSSProperties };
  children: React.ReactNode;
};

export default function Root({ props: { styles }, children }: RootProps) {
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
