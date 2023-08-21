import React from 'react';
import { MotionProps, MotionValue } from 'framer-motion';

import * as S from '../styles';

type PaintProps = {
  props: {
    src: string;
    motionValues?: MotionProps;
    scrollPosition?: MotionValue<number>;
  };
};

export default function Paint({
  props: { src, motionValues, scrollPosition = null },
}: PaintProps) {
  return (
    <S.PaintElement
      src={src}
      {...motionValues}
      style={{ scale: scrollPosition }}
    />
  );
}
