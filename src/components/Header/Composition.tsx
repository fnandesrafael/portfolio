import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '.';

export default function Composition() {
  const [canShow, setCanShow] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setTimeout(() => {
        setCanShow(true);
      }, 4000);
    } else {
      setCanShow(true);
    }
  }, [pathname]);

  return canShow ? (
    <Header.Root>
      <Header.ThemeSwitcher />
    </Header.Root>
  ) : null;
}
