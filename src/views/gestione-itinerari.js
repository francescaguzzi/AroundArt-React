import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'

import ItinerarioLista from '../components/itinerario-lista'
import VisualizzaItinerario from '../components/visualizza-itinerario'
import MainMenu from '../components/main-menu'
import './gestione-itinerari.css'

import {useOpere} from '../opere-context'

const GestioneItinerari = (props) => {

  const {getItinerari, deleteItinerario} = useOpere();
  const [itineraryVisible, setItineraryVisible] = useState('');
  const [numItinerari, setNumItinerari] = useState(getItinerari().length);

  /* const handleOpenItinerario = (titolo) => {
    setItineraryVisible(titolo);
  };

  const handleDeleteItinerario = () => {
    deleteItinerario(itineraryVisible);
    setItineraryVisible('');
  }; */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itineraryVisible &&
          event.target.closest('.visualizza-itinerario-root-class-name') === null &&
          event.target.closest('.visualizza-itinerario-bottoni') === null &&
          event.target.closest('.visualizza-itinerario-schermo2') === null &&
          event.target.closest('.visualizza-itinerario-schermo3') === null) 
        
        {
        setItineraryVisible('');
        }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [itineraryVisible, numItinerari]);

  const printItinerari = () => {
    let itinerari = [];
    for (let i = 0; i < numItinerari; i++) {
      itinerari.push(
      <ItinerarioLista
        key={i}
        titolo={`Itinerario ${i + 1}`}
        rootClassName={`itinerario-lista-root-class-name${i}`}
        itineraryVisible = {setItineraryVisible}
      ></ItinerarioLista>);
    }
    return itinerari;
  } 

  return (
    <div className="gestione-itinerari-container">
      <Helmet>
        <title>GestioneItinerari - exported project</title>
        <meta
          property="og:title"
          content="GestioneItinerari - exported project"
        />
      </Helmet>
      <div className="gestione-itinerari-container1">
        {printItinerari()}
      </div>

      {itineraryVisible !== '' && (
        <VisualizzaItinerario
          index={parseInt(itineraryVisible.split(' ')[1]) - 1}
          titolo={itineraryVisible}
          rootClassName="visualizza-itinerario-root-class-name"
          itineraryVisible = {setItineraryVisible}
        ></VisualizzaItinerario>
      )}

      <MainMenu rootClassName="main-menu-root-class-name2"></MainMenu>
    </div>
  )
}

export default GestioneItinerari
