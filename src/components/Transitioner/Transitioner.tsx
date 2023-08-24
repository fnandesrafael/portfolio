import React from 'react';
import { EASE_SLOW_OUT } from '@constants/animations';

import * as S from './styles';

type TransitionerProps = {
  slideIn?: boolean;
  slideOut?: boolean;
  children: React.ReactNode;
};

export default function Transitioner({
  slideIn,
  slideOut,
  children,
}: TransitionerProps) {
  return (
    <>
      {slideIn && (
        <S.SlideInElement
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: EASE_SLOW_OUT }}
        />
      )}
      {children}
      {slideOut && (
        <S.SlideOutElement
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: EASE_SLOW_OUT }}
        />
      )}
    </>
  );
}
