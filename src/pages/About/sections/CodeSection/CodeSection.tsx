import React from 'react';

import * as S from './styles';

export default function CodeSection() {
  return (
    <S.SectionWrapper>
      <S.Column $width="35%" $margin="0 2px 0 0">
        <S.Container $height="20%" />
        <S.Container $height="60%" $margin="2px 0 0 0" />
        <S.Container $height="20%" $margin="2px 0 2px 0" />
      </S.Column>

      <S.Column $width="30%" $margin="0 2px 0 0">
        <S.Row $height="19.95%">
          <S.Container $height="100%" $width="50%" $margin="0 2px 0 0" />
          <S.Container $height="100%" $width="50%" />
        </S.Row>

        <S.Container $height="60%" $margin="2px 0 2px 0" />

        <S.Row $height="20.25%" $margin="0 0 2px 0">
          <S.Container $width="50%" $margin="0 2px 2px 0" />
          <S.Container $width="50%" $margin="0 0 2px 0" />
        </S.Row>
      </S.Column>

      <S.Column $width="35%">
        <S.Container $height="20%" />
        <S.Container $height="60%" $margin="2px 0 0 0" />
        <S.Container $height="20%" $margin="2px 0 2px 0" />
      </S.Column>
    </S.SectionWrapper>
  );
}
