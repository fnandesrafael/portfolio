import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import * as S from './styles';

export default function NotFound() {
  useEffect(() => {
    document.body.style.cssText = 'overflow: hidden';
  }, []);

  return (
    <S.NotFoundWrapper>
      <motion.h1
        className="not-found-code"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        404
      </motion.h1>
    </S.NotFoundWrapper>
  );
}
