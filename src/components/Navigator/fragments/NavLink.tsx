import React from 'react';
import { Link } from 'react-router-dom';

import * as S from '../styles';

type NavLinkProps = {
  props: {
    page: string;
  };
  children: string;
};

export default function NavLink({ props: { page }, children }: NavLinkProps) {
  return (
    <S.NavText>
      <Link to={page}>{children}</Link>
    </S.NavText>
  );
}
