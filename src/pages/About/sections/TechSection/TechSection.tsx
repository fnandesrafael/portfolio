import React from 'react';

import * as S from './styles';

export default function TechSection() {
  return (
    <S.SectionWrapper>
      <S.LeftWrapper $width="25%" $margin="0 2px 0 0">
        <S.Square $height="55%" />

        <S.Square $height="45%" $margin="2px 0 2px 0" />
      </S.LeftWrapper>

      <S.RightWrapper $width="75%">
        <S.Column $width="20%">
          <S.Square $height="55%" />
          <S.Square $height="45%" $margin="2px 0 2px 0" />
        </S.Column>

        <S.Column $width="80%" $margin="0 0 0 2px">
          <S.Square $height="100%" $margin="0 0 2px 0" />
        </S.Column>
      </S.RightWrapper>
    </S.SectionWrapper>
  );
}
