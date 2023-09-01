import React from 'react';
import { EASE_SWEET } from '@constants/animations';
import augustine from '@assets/images/paints/augustine.png';

import * as S from './styles';

export default function SoftSection() {
  return (
    <S.SectionWrapper>
      <S.LeftWrapper>
        <S.PaintWrapper>
          <S.PaintElement
            src={augustine}
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.4, ease: EASE_SWEET }}
          />
        </S.PaintWrapper>

        <S.Square $height={20} $margin="2px 0 2px 0" />
      </S.LeftWrapper>

      <S.RightWrapper>
        <S.Column $width={53.5} $margin="0 2px 0 0">
          <S.Square $height={20} $radius="0 4rem 0 0" $margin="0 0 2px 0" />
          <S.Square $height={60} />
          <S.Square $height={20} $margin="2px 0 2px 0" />
        </S.Column>

        <S.Column $width={47}>
          <S.Square $height={20} $radius="4rem 0 0 0" $margin="0 0 2px 0" />
          <S.Square $height={60} />
          <S.Square $height={20} $margin="2px 0 2px 0" />
        </S.Column>
      </S.RightWrapper>
    </S.SectionWrapper>
  );
}
