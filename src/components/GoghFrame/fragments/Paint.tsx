import React from 'react';
import { MotionProps } from 'framer-motion';

import * as S from '../styles';

type PaintProps = {
  props: {
    src: string;
    motionValues?: MotionProps;
  };
};

export default function Paint({ props: { src, motionValues } }: PaintProps) {
  return <S.PaintElement src={src} {...motionValues} />;
}
