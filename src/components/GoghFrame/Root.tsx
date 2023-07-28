import React from 'react';
import { Link } from 'react-router-dom';

type RootProps = {
  props: {
    styles: string;
  };
  children: React.ReactElement;
};

export default function Root({ props: { styles }, children }: RootProps) {
  return (
    <div className={styles}>
      <Link to="/about">{children}</Link>
    </div>
  );
}
