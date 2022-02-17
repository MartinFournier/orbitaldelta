import React, { createContext } from 'react';

import { Persistor } from 'redux-persist/lib/types';
import { useContext } from 'react';

export const PersistorContext = createContext<Persistor | null>(null);
export const usePersistor = () => useContext(PersistorContext);

type PersistorContextProps = {
  persistor: Persistor | null;
  children: React.ReactNode;
};

export const PersistorProvider = ({
  persistor,
  children,
}: PersistorContextProps) => {
  if (!persistor) return <>{children}</>;
  return (
    <PersistorContext.Provider value={persistor}>
      {children}
    </PersistorContext.Provider>
  );
};
