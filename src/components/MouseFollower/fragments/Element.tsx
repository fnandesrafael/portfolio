import React from 'react';
import useMouseMove from '@hooks/useMouseMove';

import * as S from '../styles';

type FollowerProps = {
  children: JSX.Element | string;
  props?: {
    blend?: boolean;
  };
};

export default function Element({ props: { blend }, children }: FollowerProps) {
  const { mouseRef } = useMouseMove();

  return (
    <S.Element
      $blend={blend}
      key="mouse-follower"
      ref={mouseRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {typeof children === 'string' ? <p>{children}</p> : <>{children}</>}
    </S.Element>
  );
}
