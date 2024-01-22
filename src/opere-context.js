import React, { createContext, useContext, useState } from 'react';

// crea il contesto
const OpereContext = createContext();

// crea il provider
export const OpereProvider = ({ children }) => {

  const [listOpere, setListOpere] = useState([]);
  const [itinerari, setItinerari] = useState([]); // lista degli itinerari creati


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

  const deletePreferito = (titolo) => {
    setListOpere(listOpere.map((opera) => {
      if (opera.titolo === titolo) {
        return {
          ...opera,
          preferito: false
        }
      } else {
        return opera;
      }
    }));
  }

  // crea un itinerario a partire dalla lista di opere preferite
  /* const creaItinerario = (list) => {
    let itinerario = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].preferito) {
        itinerario.push(list[i]);
      }
    }
    
    setItinerari([...itinerari, itinerario]);
  } */

  const creaItinerario = (list) => {
    const itinerario = list.filter((opera) => opera.preferito);
    setItinerari((prevItinerari) => [...prevItinerari, itinerario]);
  }

  const removeOperaFromItinerario = (titolo) => {
    setItinerari(itinerari.map((itinerario) => {
      return itinerario.filter((opera) => opera.titolo !== titolo);
    }));
  }

  const getItinerari = () => {
    return itinerari;
  }

  const getItinerario = (index) => {
    return itinerari[index];
  }

  const deleteItinerario = (index) => {
    setItinerari(itinerari.filter((itinerario, i) => i !== index));
  }

  return (
    <OpereContext.Provider value={{ 
        inizializzaOpere, 
        togglePreferito, 
        getOpere, 
        getPreferiti, 
        isPreferito, 
        deletePreferito,
        creaItinerario,
        removeOperaFromItinerario,
        getItinerari,
        getItinerario,
        deleteItinerario
        }}>
      {children}
    </OpereContext.Provider>
  );
};

// esporta un hook personalizzato per utilizzare il contesto
export const useOpere = () => {
  return useContext(OpereContext);
};
