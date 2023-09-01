import React, { useContext } from 'react';
import { EASE_SWEET } from '@constants/animations';
import augustine from '@assets/images/paints/augustine.png';
import softDark from '@assets/images/soft_dark.png';
import softLight from '@assets/images/soft_light.png';

import { ThemeContext } from 'styled-components';
import * as S from './styles';

export default function SoftSection() {
  const theme = useContext(ThemeContext);

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
          <S.Square $height={60}>
            <S.Paragraph>
              As a professional, I have experience in{' '}
              <b>agile environments and methodologies</b>, organizing and
              executing tasks with <b>Kanban</b> and <b>Scrum</b>. I also have
              proficiency in <b>communication</b>, <b>collaboration</b>,{' '}
              <b>creativity</b>, and <b>self-leadership</b>.
            </S.Paragraph>
          </S.Square>
          <S.Square $height={20} $margin="2px 0 2px 0" />
        </S.Column>

        <S.Column $width={47}>
          <S.Square $height={20} $radius="4rem 0 0 0" $margin="0 0 2px 0" />
          <S.Square $height={60}>
            <S.BadgeElement
              src={theme.title === 'dark' ? softDark : softLight}
              whileInView={{
                transform: 'rotate(360deg)',
                transition: {
                  duration: 60,
                  repeat: Infinity,
                  repeatDelay: 0,
                  ease: 'linear',
                },
              }}
            />
          </S.Square>
          <S.Square $height={20} $margin="2px 0 2px 0" />
        </S.Column>
      </S.RightWrapper>
    </S.SectionWrapper>
  );
}
