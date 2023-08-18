import React from 'react';

import { MotionStyle } from 'framer-motion';
import * as S from '../styles';

type RootProps = {
  props: { styles: MotionStyle };
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
