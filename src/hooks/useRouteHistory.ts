import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type UseRouteHistoryProps = {
  routeHistory: Array<string>;
  prevRoute: string;
};

function useRouteHistory(): UseRouteHistoryProps {
  const [routeHistory, setRouteHistory] = useState<Array<string>>([]);
  const location = useLocation();

  useEffect(() => {
    setRouteHistory((prevArray) => [...prevArray, location.pathname]);
  }, [location.pathname]);

  const prevRoute: string =
    routeHistory.length >= 2 ? routeHistory[routeHistory.length - 2] : null;

  return {
    routeHistory,
    prevRoute,
  };
}

export default useRouteHistory;
