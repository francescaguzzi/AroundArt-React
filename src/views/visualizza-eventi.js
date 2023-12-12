import React from 'react'

import { Helmet } from 'react-helmet'

import MainMenu from '../components/main-menu'
import EventoLista from '../components/evento-lista'
import VisualizzaEvento from '../components/visualizza-evento'
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
          data="Maggio 2024"
          luogo="Diverse località"
          titolo="Cheap Festival"
          rootClassName="evento-lista-root-class-name"
        ></EventoLista>
        <EventoLista
          data="24 aprile 2024"
          luogo="Via Mascarella"
          titolo="Live Painting"
          rootClassName="evento-lista-root-class-name1"
        ></EventoLista>
        <EventoLista
          data="Gennaio 2024"
          luogo="Dumbo"
          titolo="Festival arte urbana"
          rootClassName="evento-lista-root-class-name2"
        ></EventoLista>
        <EventoLista
          data="7 febbraio "
          luogo="Via del Pratello 90"
          titolo="Incontro con artisti di street art"
          rootClassName="evento-lista-root-class-name3"
        ></EventoLista>
        <EventoLista
          data="Marzo 2024"
          luogo="MamBo"
          titolo="Mostra di arte contemporanea"
          rootClassName="evento-lista-root-class-name4"
        ></EventoLista>
      </div>
      <VisualizzaEvento
        data="Maggio 2024"
        titolo="Cheap Festival"
        indirizzo="Diverse località"
        descrizione="Cheap Street Poster Art Festival è un festival di street art nato nel 2013 a Bologna e organizzato appunto da Cheap. Si tratta di un progetto indipendente che promuove la street art come strumento di rinnovamento urbano e che valorizza l’ibridazione dei linguaggi espressivi privilegiando come supporto la carta."
        rootClassName="visualizza-evento-root-class-name"
      ></VisualizzaEvento>
    </div>
  )
}

export default VisualizzaEventi
