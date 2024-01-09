import React, {useState} from 'react'

import { Helmet } from 'react-helmet'

import MainMenu from '../components/main-menu'
import EventoLista from '../components/evento-lista'
import VisualizzaEvento from '../components/visualizza-evento'
import './visualizza-eventi.css'

const VisualizzaEventi = (props) => {
  const [eventsVisible, setEventsVisible] = useState('');
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
          eventsVisible = {setEventsVisible}
        ></EventoLista>
        <EventoLista
          data="24 aprile 2024"
          luogo="Via Mascarella"
          titolo="Live Painting"
          rootClassName="evento-lista-root-class-name1"
          eventsVisible = {setEventsVisible}
        ></EventoLista>
        <EventoLista
          data="Gennaio 2024"
          luogo="Dumbo"
          titolo="Festival arte urbana"
          rootClassName="evento-lista-root-class-name2"
          eventsVisible = {setEventsVisible}
        ></EventoLista>
        <EventoLista
          data="Marzo 2024"
          luogo="MamBo"
          titolo="Mostra di arte contemporanea"
          rootClassName="evento-lista-root-class-name4"
          eventsVisible = {setEventsVisible}
        ></EventoLista>
      </div>
      {eventsVisible === 'Cheap Festival' && (<VisualizzaEvento data="Maggio 2024"
        titolo="Cheap Festival"
        indirizzo="Diverse località"
        descrizione="Cheap Street Poster Art Festival è un festival di street art nato nel 2013 a Bologna e organizzato appunto da Cheap. Si tratta di un progetto indipendente che promuove la street art come strumento di rinnovamento urbano e che valorizza l’ibridazione dei linguaggi espressivi privilegiando come supporto la carta."
        rootClassName="visualizza-evento-root-class-name"
        eventsVisible = {setEventsVisible}
      ></VisualizzaEvento>)}

      {eventsVisible === 'Live Painting' && (<VisualizzaEvento data="24 aprile 2024"
        titolo = "Live Painting"
        indirizzo="Via Mascarella"
        descrizione = "Il live painting è una forma di arte contemporanea che consiste nella creazione di un’opera d’arte in diretta, davanti al pubblico. L’artista, in questo caso, non è più solo un creatore, ma diventa anche un performer."
        rootClassName="visualizza-evento-root-class-name"
        eventsVisible = {setEventsVisible}
      ></VisualizzaEvento>)}

      {eventsVisible === 'Festival arte urbana' && (<VisualizzaEvento data="Gennaio 2024"
        titolo = "Festival arte urbana"
        indirizzo="Dumbo"
        descrizione = "Il festival di arte urbana è un evento che si tiene ogni anno a Bologna. Nato nel 2018, ha l’obiettivo di promuovere la street art e la cultura urbana. Il festival si svolge in diversi luoghi della città e prevede mostre, live painting, workshop, incontri e molto altro."
        rootClassName="visualizza-evento-root-class-name"
        eventsVisible = {setEventsVisible}
      ></VisualizzaEvento>)}

      {eventsVisible === 'Incontro con artisti di street art' && (<VisualizzaEvento data="7 febbraio 2024"
        titolo = "Incontro con artisti di street art"
        indirizzo="Via del Pratello 90"
        descrizione = "L’incontro con artisti di street art è un evento che si tiene ogni anno a Bologna. Nato nel 2018, ha l’obiettivo di promuovere la street art e la cultura urbana. Il festival si svolge in diversi luoghi della città e prevede mostre, live painting, workshop, incontri e molto altro."
        rootClassName="visualizza-evento-root-class-name"
        eventsVisible = {setEventsVisible}
      ></VisualizzaEvento>)}

      {eventsVisible === 'Mostra di arte contemporanea' && (<VisualizzaEvento data="Marzo 2024"
        titolo = "Mostra di arte contemporanea"
        indirizzo="MamBo"
        descrizione = "La mostra di arte contemporanea è un evento che si tiene ogni anno a Bologna. Nato nel 2018, ha l’obiettivo di promuovere la street art e la cultura urbana. Il festival si svolge in diversi luoghi della città e prevede mostre, live painting, workshop, incontri e molto altro."
        rootClassName="visualizza-evento-root-class-name"
        eventsVisible = {setEventsVisible}
      ></VisualizzaEvento>)}
    </div>
  )
}

export default VisualizzaEventi
