import { Helmet } from 'react-helmet'
import React, { useState } from 'react'

import ItinerarioLista from '../components/itinerario-lista'
import VisualizzaItinerario from '../components/visualizza-itinerario'
import MainMenu from '../components/main-menu'
import './gestione-itinerari.css'

const GestioneItinerari = (props) => {
  const [itineraryVisible, setItineraryVisible] = useState('');
  const [numItinerari, setNumItinerari] = useState(3);

  const printItinerari = () => {
    let itinerari = [];
    for (let i = 0; i < numItinerari; i++) {
      itinerari.push(<ItinerarioLista
        key={i}
        titolo={`Itinerario ${i + 1}`}
        rootClassName={`itinerario-lista-root-class-name${i}`}
        itineraryVisible = {setItineraryVisible}
      ></ItinerarioLista>);
    }
    return itinerari;
  }

  const deleteItinerario = () => {
    setNumItinerari(numItinerari - 1);
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
      {itineraryVisible === 'Itinerario 1' && (<VisualizzaItinerario
        titolo="Itinerario 1"
        rootClassName="visualizza-itinerario-root-class-name"
        deleteItinerario = {deleteItinerario}
        itineraryVisible = {setItineraryVisible}
      ></VisualizzaItinerario>)}

      {itineraryVisible === 'Itinerario 2' && (<VisualizzaItinerario
        titolo = "Itinerario 2"
        rootClassName = "visualizza-itinerario-root-class-name1"
        deleteItinerario = {deleteItinerario}
        itineraryVisible = {setItineraryVisible}
      ></VisualizzaItinerario>)}

      {itineraryVisible === 'Itinerario 3' && (<VisualizzaItinerario
        titolo = "Itinerario 3"
        rootClassName = "visualizza-itinerario-root-class-name2"
        deleteItinerario = {deleteItinerario}
        itineraryVisible = {setItineraryVisible}
      ></VisualizzaItinerario>)}
      <MainMenu rootClassName="main-menu-root-class-name2"></MainMenu>
    </div>
  )
}

export default GestioneItinerari
