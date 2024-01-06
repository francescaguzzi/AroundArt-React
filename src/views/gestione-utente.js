import React from 'react'

import { Helmet } from 'react-helmet'

import MainMenu from '../components/main-menu'
import EliminaProfiloPopup from '../components/elimina-profilo-popup'
import ModificaProfiloPopup from '../components/modifica-profilo-popup'
import { useAuth } from '../auth-context'
import './gestione-utente.css'


const GestioneUtente = (props) => {
  const { getRegistrationInfo } = useAuth();
  const { username, email } = getRegistrationInfo();
  return (
    <div className="gestione-utente-container">
      <Helmet>
        <title>GestioneUtente - exported project</title>
        <meta property="og:title" content="GestioneUtente - exported project" />
      </Helmet>
      <div className="gestione-utente-container1">
        <img
          alt="Vector1719"
          src="/external/vector1719-71kh.svg"
          className="gestione-utente-vector"
        />
        <span id="username" className="gestione-utente-text">
          <span>{username}</span>
        </span>
        <span className="gestione-utente-text2">
          <span>{email}</span>
        </span>
        <button type="button" className="gestione-utente-modificabutton button">
          <span className="gestione-utente-text4">
            <span>Modifica profilo</span>
          </span>
        </button>
        <button type="button" className="gestione-utente-eliminabutton button">
          <span className="gestione-utente-text6">Elimina profilo</span>
        </button>
      </div>
      <MainMenu rootClassName="main-menu-root-class-name1"></MainMenu>
      <EliminaProfiloPopup rootClassName="elimina-profilo-popup-root-class-name"></EliminaProfiloPopup>
      <ModificaProfiloPopup rootClassName="modifica-profilo-popup-root-class-name"></ModificaProfiloPopup>
    </div>
  )
}

export default GestioneUtente
