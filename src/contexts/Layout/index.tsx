import { createContext, useMemo, useState } from 'react';

import type { iLayoutContext } from './iLayoutContext';

export const LayoutContext = createContext<iLayoutContext>({} as iLayoutContext);

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [whatsapp, setWhatsapp] = useState(false);
  const contextValue = useMemo(
    () => ({
      whatsapp,
      setWhatsapp,
    }),
    [ whatsapp],
  );

  return (
      <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>
  );
};
