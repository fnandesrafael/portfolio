import React, { createContext } from 'react';
import useRouteHistory from '@hooks/useRouteHistory';

type HistoryContextProps = {
  prevRoute: string;
};

export const HistoryContext = createContext<HistoryContextProps>(null);

export default function HistoryProvider({ children }) {
  const { prevRoute } = useRouteHistory();

  return (
    <HistoryContext.Provider value={{ prevRoute }}>
      {children}
    </HistoryContext.Provider>
  );
}
