import { Helmet } from 'react-helmet'
import React, { useState } from 'react'

import ItinerarioLista from '../components/itinerario-lista'
import VisualizzaItinerario from '../components/visualizza-itinerario'
import MainMenu from '../components/main-menu'
import './gestione-itinerari.css'

const GestioneItinerari = (props) => {
  const [itineraryVisible, setItineraryVisible] = useState('');
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
        <ItinerarioLista
          titolo="Itinerario 1"
          rootClassName="itinerario-lista-root-class-name"
          itineraryVisible = {setItineraryVisible}
        ></ItinerarioLista>
        <ItinerarioLista
          titolo="Itinerario 2"
          rootClassName="itinerario-lista-root-class-name1"
        ></ItinerarioLista>
        <ItinerarioLista
          titolo="Itinerario 3"
          rootClassName="itinerario-lista-root-class-name2"
        ></ItinerarioLista>
      </div>
      {itineraryVisible === 'Itinerario 1' && (<VisualizzaItinerario
        titolo="Itinerario 1"
        rootClassName="visualizza-itinerario-root-class-name"
      ></VisualizzaItinerario>)}
      <MainMenu rootClassName="main-menu-root-class-name2"></MainMenu>
    </div>
  )
}

export default GestioneItinerari
