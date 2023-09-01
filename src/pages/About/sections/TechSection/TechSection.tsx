import React from 'react';
import { EASE_SWEET } from '@constants/animations';
import chevalier from '@assets/images/paints/chevalier.png';

import * as S from './styles';

export default function TechSection() {
  return (
    <S.SectionWrapper>
      <S.LeftWrapper $width="25%" $margin="0 2px 0 0">
        <S.Square $height="55%" $radius="0 0 4rem 0" />

        <S.Square $height="45%" $margin="2px 0 2px 0" $radius="0 4rem 0 0" />
      </S.LeftWrapper>

      <S.RightWrapper $width="75%">
        <S.Column $width="20%">
          <S.Square $height="55%" $radius="0 0 0 4rem" />

          <S.Square $height="45%" $margin="2px 0 2px 0" $radius="4rem 0 0 0" />
        </S.Column>

        <S.Column $width="80%" $margin="0 0 0 2px">
          <S.PaintWrapper>
            <S.Paragraph>Tecnologies</S.Paragraph>
            <S.PaintElement
              src={chevalier}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 0.4, ease: EASE_SWEET }}
            />
          </S.PaintWrapper>
        </S.Column>
      </S.RightWrapper>
    </S.SectionWrapper>
  );
}
