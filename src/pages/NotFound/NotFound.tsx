import React, { useEffect } from 'react';

import * as S from './styles';

export default function NotFound() {
  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';
  }, []);

  return (
    <S.NotFoundWrapper>
      <S.ErrorElement
        className="not-found-code"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        404
      </S.ErrorElement>
    </S.NotFoundWrapper>
  );
}
