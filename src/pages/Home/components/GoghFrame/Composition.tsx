import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { GoghFrame } from '@components/GoghFrame';
import darkPaint from '@assets/images/the_starry_night.jpg';
import lightPaint from '@assets/images/green_wheat_field_with_cypress.jpg';
import { EASE_SWEET } from '@constants/animations/eases';

export default function Composition() {
  const theme = useContext(ThemeContext);

  return (
    <GoghFrame.Root props={{ hasLink: true, path: '/about' }}>
      {theme.title === 'dark' ? (
        <GoghFrame.Paint
          key="dark-paint"
          props={{
            src: darkPaint,
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
          }}
        />
      ) : (
        <GoghFrame.Paint
          key="light-paint"
          props={{
            src: lightPaint,
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
          }}
        />
      )}
    </GoghFrame.Root>
  );
}
