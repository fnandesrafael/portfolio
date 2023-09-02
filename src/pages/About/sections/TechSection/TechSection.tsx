import React from 'react';
import { EASE_SWEET } from '@constants/animations';
import chevalier from '@assets/images/paints/chevalier.png';

import * as S from './styles';

export default function TechSection() {
  return (
    <S.SectionWrapper>
      <S.LeftWrapper $width="35%" $margin="0 2px 0 0">
        <S.Container $height="75%" $radius="0 0 4rem 0">
          <S.Paragraph>
            Currently, I develop in the languages <b>JavaScript</b> and{' '}
            <b>TypeScript</b>, utilizing their core libraries and technologies,
            such as <b>React.js</b> and <b>Node.js</b>. In an effort to expand
            my skillset, I am also studying <b>React Native</b>, <b>Dart</b>,
            and <b>Flutter</b> with the aim of venturing into the mobile
            universe.
          </S.Paragraph>
        </S.Container>

        <S.Container $height="25%" $margin="2px 0 2px 0" $radius="0 4rem 0 0" />
      </S.LeftWrapper>

      <S.RightWrapper $width="65%">
        <S.Column $width="23%">
          <S.Container $height="75%" $radius="0 0 0 4rem" />

          <S.Container
            $height="25%"
            $margin="2px 0 2px 0"
            $radius="4rem 0 0 0"
          />
        </S.Column>

        <S.Column $width="77%" $margin="0 0 0 2px">
          <S.PaintWrapper>
            <S.Heading>Technologies</S.Heading>
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
