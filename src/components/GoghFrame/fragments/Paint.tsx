import React from 'react';

import * as S from '../styles';

type PaintProps = {
  props: {
    src: string;
    initial?: object;
    animate?: object;
    exit?: object;
    transition?: object;
    whileHover?: object;
  };
};

export default function Paint({ props }: PaintProps) {
  return <S.PaintElement {...props} />;
}
