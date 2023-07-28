import React from 'react';
import { Link } from 'react-router-dom';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  return (
    <div className="paint-frame">
      <Link to="/about">{children}</Link>
    </div>
  );
}
