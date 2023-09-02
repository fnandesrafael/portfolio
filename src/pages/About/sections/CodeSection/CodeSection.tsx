import React from 'react';

import * as S from './styles';

export default function CodeSection() {
  return (
    <S.SectionWrapper>
      <S.Column $width="35%">
        <S.Container $height="20%" />
        <S.Container $height="80%" />
        <S.Container $height="20%" />
      </S.Column>

      <S.Column $width="30%">
        <S.Row $height="20%">
          <S.Container $width="50%" />
          <S.Container $width="50%" />
        </S.Row>

        <S.Container $height="80%" />

        <S.Row $height="20%">
          <S.Container $width="50%" />
          <S.Container $width="50%" />
        </S.Row>
      </S.Column>

      <S.Column $width="35%">
        <S.Container $height="20%" />
        <S.Container $height="80%" />
        <S.Container $height="20%" />
      </S.Column>
    </S.SectionWrapper>
  );
}
