import React from 'react'

import { Helmet } from 'react-helmet'

import OperaLista from '../components/opera-lista'
import MainMenu from '../components/main-menu'
import './gestione-preferiti.css'

const GestionePreferiti = (props) => {
  return (
    <div className="gestione-preferiti-container">
      <Helmet>
        <title>GestionePreferiti - exported project</title>
        <meta
          property="og:title"
          content="GestionePreferiti - exported project"
        />
      </Helmet>
      <div className="gestione-preferiti-lista-opere">
        <OperaLista
          artista="Exit Enter"
          image_src="/opere/exit_via-belle-arti-%232_0-200h.jpg"
          indirizzo="Via delle Belle Arti"
          rootClassName="opera-lista-root-class-name"
        ></OperaLista>
        <OperaLista
          artista="EricaIlCane"
          image_src="/opere/serranda_via%20mascarella%2026a%2C%20modo%20-200h.jpg"
          indirizzo="via Mascarella 26A, libreria Moda Infoshop"
        ></OperaLista>
        <OperaLista
          artista="About Ponny"
          image_src="/opere/via-del-pratello-89_2b_carlos-atoche-200h.jpg"
          indirizzo="Via del Pratello, 90"
        ></OperaLista>
        <OperaLista
          titolo="500 Anni dalla Conquista dell'America"
          artista="Luis Gutierrez"
          image_src="/opere/gutierrez_zamboni3-200h.png"
          indirizzo="Via Zamboni 38"
        ></OperaLista>
        <OperaLista
          artista="Arianna Vauro"
          image_src="/opere/vicolo%20facchini_ariannavauro_0-200h.jpg"
          indirizzo="Vicolo de Facchini 7/2"
          rootClassName="opera-lista-root-class-name1"
        ></OperaLista>
      </div>
      <button type="button" className="gestione-preferiti-button button">
        Crea il tuo itinerario!
      </button>
      <MainMenu rootClassName="main-menu-root-class-name3"></MainMenu>
    </div>
  )
}

export default GestionePreferiti
