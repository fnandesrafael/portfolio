import React from 'react';
import Quote from './components/Quote';

import * as S from './styles';

export default function BioSection() {
  return (
    <S.SectionWrapper>
      <S.BioContainer $margin="0 2px 2px 0" $radius="0 0 4rem 0">
        <Quote />

        <S.BioText>
          I am a recently graduated web developer from Trybe, where I had the
          opportunity to learn and collaborate with amazing people and teams who
          helped me grow as a person and professional. My curiosity about
          computer graphics, design, semiotics, aesthetics, and ludology
          inspires me to create and design my applications. As a developer, I
          enjoy spending time exploring ways that help me convey meaningful
          narratives while taking the development process in a more artisanal
          way.
        </S.BioText>
      </S.BioContainer>

      <S.RightWrapper>
        <S.RowWrapper $margin="0 0 2px 0 ">
          <S.Container $margin="0 2px 0 0" $radius="0 0 4rem 0" />
          <S.Container $radius="0 0 0 4rem" />
        </S.RowWrapper>

        <S.RowWrapper $margin="0 0 2px 0">
          <S.Container $margin="0 2px 0 0" $radius="0 4rem 0 4rem" />
          <S.Container $radius="4rem 0 0 0" />
        </S.RowWrapper>
      </S.RightWrapper>
    </S.SectionWrapper>
  );
}
