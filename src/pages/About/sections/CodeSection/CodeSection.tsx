import React from 'react';

import * as S from './styles';

export default function CodeSection() {
  return (
    <S.SectionWrapper>
      <S.Column $width="35%" />
      <S.Column $width="15%" />
      <S.Column $width="15%" />
      <S.Column $width="35%" />
    </S.SectionWrapper>
  );
}
