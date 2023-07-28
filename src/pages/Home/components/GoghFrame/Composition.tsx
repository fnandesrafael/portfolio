import React, { useContext } from 'react';
import { EASE_SWEET } from '@constants/animations';
import { ThemeContext } from '@context/ThemeProvider';
import darkPaint from '@assets/images/the_starry_night.jpg';
import lightPaint from '@assets/images/green_wheat_field_with_cypress.jpg';
import GoghFrame from '@components/GoghFrame';

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
    <GoghFrame.Root
      props={{
        styles:
          'flex absolute left-[50%] top-[45%] translate-x-[-50%] translate-y-[-50%] content-center h-[50vh] w-[30vh] overflow-hidden rounded-t-full',
      }}
    >
      {isDarkMode ? (
        <GoghFrame.Paint
          props={{
            styles: 'h-[65vh] object-cover',
            key: 'dark-paint',
            src: darkPaint,
            animations: darkPaintAnimations,
          }}
        />
      ) : (
        <GoghFrame.Paint
          props={{
            styles: 'h-[65vh] object-cover',
            key: 'light-paint',
            src: lightPaint,
            animations: lightPaintAnimations,
          }}
        />
      )}
    </GoghFrame.Root>
  );
}
