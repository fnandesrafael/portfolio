import React, { ComponentType } from 'react';
import { EASE_SLOW_OUT } from '@constants/animations';

import * as S from './styles';

const Transitioner = (Component: ComponentType) => {
  return () => (
    <>
      <S.SlideInElement
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: EASE_SLOW_OUT }}
      />
      <Component />
      <S.SlideOutElement
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: EASE_SLOW_OUT }}
      />
    </>
  );
};

export default Transitioner;
