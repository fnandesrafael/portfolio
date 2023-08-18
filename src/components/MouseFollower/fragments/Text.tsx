import React from 'react';
import useMouseMove from '@hooks/useMouseMove';

import * as S from '../styles';

type FollowerProps = {
  children: string;
};

export default function Text({ children }: FollowerProps) {
  const { mouseRef } = useMouseMove();

  return (
    <S.TextElement
      key="mouse-follower"
      ref={mouseRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <p>{children}</p>
    </S.TextElement>
  );
}
