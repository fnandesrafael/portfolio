import { useEffect, useRef, useState } from 'react';

const useMouseMove = () => {
  const [mouseMove, setMouseMove] = useState<boolean>(false);
  const mouseRef = useRef(null);

  const handleMouseMove = (e) => {
    setMouseMove(true);

    const follower = mouseRef.current;

    if (follower) {
      const x = e.clientX;
      const y = e.clientY;

      follower.style.cssText = `top: ${y}px; left: ${x}px;`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return { mouseMove, mouseRef };
};

export default useMouseMove;
