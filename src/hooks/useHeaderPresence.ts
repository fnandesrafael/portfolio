import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeaderPresence = () => {
  const [canShow, setCanShow] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTimeout(() => {
        setCanShow(true);
      }, 4000);
    } else {
      setCanShow(true);
    }
  }, [location]);

  return { canShow };
};

export default useHeaderPresence;
