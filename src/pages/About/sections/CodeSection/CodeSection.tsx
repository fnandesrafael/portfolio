import React from 'react';
import { EASE_SWEET } from '@constants/animations';
import deadNature from '@assets/images/paints/dead_nature.png';

import * as S from './styles';

export default function CodeSection() {
  return (
    <S.SectionWrapper>
      <S.Column $width="35%">
        <S.Container $height="20%" />
        <S.Container $height="60%" $margin="2px 0 0 0">
          <S.Heading>Code</S.Heading>
        </S.Container>
        <S.Container $height="20%" $margin="2px 0 2px 0" />
      </S.Column>

      <S.Column $width="30%" $margin="0 2px 0 2px">
        <S.Container $height="20%" $margin="0 0 2px 0" />
        <S.Container $height="59.62%">
          <S.PaintWrapper>
            <S.PaintElement
              src={deadNature}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: EASE_SWEET }}
            />
          </S.PaintWrapper>
        </S.Container>
        <S.Container $height="20%" $margin="2px 0 2px 0" />
      </S.Column>

      <S.Column $width="35%">
        <S.Container $height="20%" />
        <S.Container $height="60%" $margin="2px 0 0 0">
          <S.Paragraph>
            I have knowledge and practice in both <b>functional programming</b>{' '}
            and <b>object-oriented programming</b> paradigms. When writing my
            code, I always aim to apply principles of <b>SOLID</b>,{' '}
            <b>Test Drive Development</b>, and <b>Clean Code</b>.
          </S.Paragraph>
        </S.Container>
        <S.Container $height="20%" $margin="2px 0 2px 0" />
      </S.Column>
    </S.SectionWrapper>
  );
}
