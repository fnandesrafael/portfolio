import React from 'react';

import * as S from './styles';

export default function FinalSection() {
  return (
    <S.SectionWrapper>
      <S.Container $radius="0 4rem 0 0" $margin="0 2px 2px 0" $width="35%" />

      <S.Container $radius="4rem 0 0 0" $margin="0 0 2px 0" $width="65%" />
    </S.SectionWrapper>
  );
}
