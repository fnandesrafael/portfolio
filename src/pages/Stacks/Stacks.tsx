import React, { useLayoutEffect, useState } from 'react';
import stacksData from '@data/stacks';
import { EASE_SWEET } from '@constants/animations';
import { Navigator } from '@components/Navigator';

import * as S from './styles';

export default function Stacks() {
  const [nextZIndex, setNextZIndex] = useState(10);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleZIndex = (e) => {
    setNextZIndex((prevZIndex) => prevZIndex + 1);
    e.target.style.zIndex = nextZIndex;
  };

  return (
    <>
      <S.PageWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: EASE_SWEET }}
      >
        <S.PageHeading>Stacks</S.PageHeading>

        <S.StacksWrapper>
          {stacksData.map((stack) => (
            <S.StackElement
              key={stack.id}
              src={stack.frame}
              drag
              dragMomentum={false}
              whileDrag={{ scale: 1.1, cursor: 'pointer' }}
              onDragStart={handleZIndex}
              $scale={stack.scale}
              $left={stack.left}
              $top={stack.top}
            />
          ))}
        </S.StacksWrapper>
      </S.PageWrapper>

      <Navigator.Root>
        <Navigator.NavLink page="/home">Home</Navigator.NavLink>
        <Navigator.NavLink page="/about">About</Navigator.NavLink>
        <Navigator.NavLink page="/resume">Resume</Navigator.NavLink>
        <Navigator.NavLink page="/projects">Projects</Navigator.NavLink>
      </Navigator.Root>
    </>
  );
}
