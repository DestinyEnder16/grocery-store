import React, { createContext, useContext, useState } from 'react';

// Define the shape of our data
const InfoContext = createContext<any>(null);

// create the 'Provider'
export const InfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [country, setCountry] = useState({
    code: 'NG',
    name: {
      en: 'Nigeria',
    },
    flag: '🇳🇬',
    dial_code: '+234',
  });

  const [number, setNumber] = useState('');

  //   return - giving access to the components to use
  return (
    <InfoContext.Provider value={{ country, setCountry, number, setNumber }}>
      {children}
    </InfoContext.Provider>
  );
};

// Custom hook for easy access
export const useInfo = () => useContext(InfoContext);
