import React from 'react'

import { Helmet } from 'react-helmet'

import MainMenu from '../components/main-menu'
import EventoLista from '../components/evento-lista'
import './visualizza-eventi.css'

const VisualizzaEventi = (props) => {
  return (
    <div className="visualizza-eventi-container">
      <Helmet>
        <title>VisualizzaEventi - exported project</title>
        <meta
          property="og:title"
          content="VisualizzaEventi - exported project"
        />
      </Helmet>
      <MainMenu rootClassName="main-menu-root-class-name4"></MainMenu>
      <div className="visualizza-eventi-listaeventi">
        <EventoLista
          rootClassName="evento-lista-root-class-name"
          titolo="Cheap Festival"
          luogo="Diverse località"
          data="Ottobre-Novembre"
        ></EventoLista>
        <EventoLista
          rootClassName="evento-lista-root-class-name1"
          titolo="Live Painting"
        ></EventoLista>
        <EventoLista
          rootClassName="evento-lista-root-class-name2"
          titolo="Festival arte urbana"
        ></EventoLista>
      </div>
    </div>
  )
}

export default VisualizzaEventi
