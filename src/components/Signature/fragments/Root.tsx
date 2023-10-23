import React, { CSSProperties } from 'react';

import * as S from '../styles';

type RootProps = {
  styles: CSSProperties;
  subheading?: boolean
  children: React.ReactNode;
};

export default function Root({ styles, subheading, children }: RootProps) {
  return (
    <S.SignatureWrapper
      style={styles}
      subheading={subheading}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </S.SignatureWrapper>
  );
}
