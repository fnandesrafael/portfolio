import React, { useEffect, useState } from 'react';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  const [mouseMove, setMouseMove] = useState<boolean>(false);

  const handleMouseMove = () => {
    setMouseMove(true);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mouseMove ? <>{children}</> : null;
}
