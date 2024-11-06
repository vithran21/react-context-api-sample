import React, { createContext } from 'react';

// Create a context
export const DetailsContext = createContext();

// Create a provider component
export const DetailsProvider = ({ children }) => {
  const details = { name: "pavithran", age: 29, city: "chennai" };

  return (
    <DetailsContext.Provider value={details}>
      {children}
    </DetailsContext.Provider>
  );
};
