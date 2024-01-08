import React, { createContext, useContext, useState } from 'react';

// crea il contesto
const OpereContext = createContext();

// crea il provider
export const OpereProvider = ({ children }) => {

  const [listOpere, setListOpere] = useState([]);

  const inizializzaOpere = (list) => {
    setListOpere(list);
  }

  const togglePreferito = (titolo) => {
    setListOpere(listOpere.map((opera) => {
      if (opera.titolo === titolo) {
        return {
          ...opera,
          preferito: !opera.preferito
        }
      } else {
        return opera;
      }
    }));
  }

  const getOpere = () => {
    return listOpere;
  }

  const getPreferiti = () => {
    return listOpere.filter((opera) => opera.preferito);
  }

  const isPreferito = (titolo) => {
    return listOpere.find((opera) => opera.titolo === titolo).preferito;
  }

  return (
    <OpereContext.Provider value={{ inizializzaOpere, togglePreferito, getOpere, getPreferiti, isPreferito}}>
      {children}
    </OpereContext.Provider>
  );
};

// esporta un hook personalizzato per utilizzare il contesto
export const useOpere = () => {
  return useContext(OpereContext);
};
