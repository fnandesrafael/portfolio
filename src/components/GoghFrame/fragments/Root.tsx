import React from 'react';
import { Link } from 'react-router-dom';
import { MotionProps } from 'framer-motion';

import * as S from '../styles';

type RootProps = {
  props: {
    hasLink?: boolean;
    path?: string;
    motionValues?: MotionProps;
  };
  children: React.ReactNode;
};

export default function Root({
  props: { hasLink, path, motionValues },
  children,
}: RootProps) {
  return (
    <S.FrameWrapper {...motionValues}>
      {hasLink ? <Link to={path}>{children}</Link> : <>{children}</>}
    </S.FrameWrapper>
  );
}
