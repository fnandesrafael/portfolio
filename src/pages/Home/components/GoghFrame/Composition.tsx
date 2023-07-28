import React, { useContext } from 'react';
import { ThemeContext } from '@context/ThemeProvider';
import darkPaint from '@assets/images/the_starry_night.jpg';
import lightPaint from '@assets/images/green_wheat_field_with_cypress.jpg';
import { EASE_SWEET } from '@constants/animations';
import { GoghFrame } from './index';

import './GoghFrame.scss';

const darkPaintAnimations = {
  initial: { y: -200, opacity: 0, scale: 2.4 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: EASE_SWEET },
  },
  whileHover: {
    scale: 3,
  },
  transition: { duration: 1, ease: EASE_SWEET },
};

const lightPaintAnimations = {
  initial: { y: 200, opacity: 0, scale: 2.4 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: EASE_SWEET },
  },
  whileHover: {
    scale: 3,
  },
  transition: { duration: 1, ease: EASE_SWEET },
};

export default function Composition() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <GoghFrame.Root>
      {isDarkMode ? (
        <GoghFrame.Paint
          props={{
            key: 'dark-paint',
            src: darkPaint,
            animations: darkPaintAnimations,
          }}
        />
      ) : (
        <GoghFrame.Paint
          props={{
            key: 'light-paint',
            src: lightPaint,
            animations: lightPaintAnimations,
          }}
        />
      )}
    </GoghFrame.Root>
  );
}
