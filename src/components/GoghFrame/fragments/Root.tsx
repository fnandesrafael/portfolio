import React from 'react';
import { Link } from 'react-router-dom';

import * as S from '../styles';

type RootProps = {
  props: {
    hasLink?: boolean;
    path?: string;
  };
  children: React.ReactNode;
};

export default function Root({
  props: { hasLink, path },
  children,
}: RootProps) {
  return (
    <S.FrameWrapper>
      {hasLink ? <Link to={path}>{children}</Link> : <>{children}</>}
    </S.FrameWrapper>
  );
}
