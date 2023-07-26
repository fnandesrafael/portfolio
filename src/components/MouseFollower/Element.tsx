import React, { useEffect, useRef } from 'react';

type ElementProps = {
  children: React.ReactElement;
};

export default function Element({ children }: ElementProps) {
  const mouseRef = useRef(null);

  const handleFollower = (e: MouseEvent) => {
    const follower = mouseRef.current;

    if (follower) {
      const x = e.clientX;
      const y = e.clientY;

      follower.style.cssText = `top: ${y}px; left: ${x}px;`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleFollower);

    return () => {
      document.removeEventListener('mousemove', handleFollower);
    };
  }, []);

  return (
    <div
      ref={mouseRef}
      className="fixed top-0 left-0 ml-6 mt-4  pointer-events-none z-10"
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          key: 'mouse-follower',
        }),
      )}
    </div>
  );
}
