import useMouseMove from '@hooks/useMouseMove';
import React from 'react';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  const { mouseMove } = useMouseMove();

  return mouseMove && <>{children}</>;
}
