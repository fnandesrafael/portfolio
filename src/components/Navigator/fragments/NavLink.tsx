import React from 'react';
import { Link } from 'react-router-dom';

import * as S from '../styles';

type NavLinkProps = {
  page: string;
  children: string;
};

export default function NavLink({ page, children }: NavLinkProps) {
  return (
    <S.NavText>
      <Link to={page}>{children}</Link>
    </S.NavText>
  );
}
