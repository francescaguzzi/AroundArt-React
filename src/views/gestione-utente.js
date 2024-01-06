import React, {useState} from 'react'

import { Helmet } from 'react-helmet'

import MainMenu from '../components/main-menu'
import EliminaProfiloPopup from '../components/elimina-profilo-popup'
import ModificaProfiloPopup from '../components/modifica-profilo-popup'
import { useAuth } from '../auth-context'
import './gestione-utente.css'


const GestioneUtente = (props) => {
  const { getRegistrationInfo } = useAuth();
  const { username, email } = getRegistrationInfo();
  const [isModificaVisible, setIsModificaVisible] = useState(false);
  const [isEliminaVisible, setIsEliminaVisible] = useState(false);

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
        <span className="gestione-utente-text">
          <span>{username}</span>
        </span>
        <span className="gestione-utente-text2">
          <span>{email}</span>
        </span>
        <button type="button" className="gestione-utente-modificabutton button" onClick={() => {setIsModificaVisible(true)}}>
          <span className="gestione-utente-text4">
            <span>Modifica profilo</span>
          </span>
        </button>
        <button type="button" className="gestione-utente-eliminabutton button" onClick={() => {setIsEliminaVisible(true)}}>
          <span className="gestione-utente-text6">Elimina profilo</span>
        </button>
      </div>
      <MainMenu rootClassName="main-menu-root-class-name"></MainMenu>
      <EliminaProfiloPopup rootClassName="elimina-profilo-popup-root-class-name" isEliminaVisible = {isEliminaVisible} setIsEliminaVisible = {setIsEliminaVisible}></EliminaProfiloPopup>
      <ModificaProfiloPopup rootClassName="modifica-profilo-popup-root-class-name" isModificaVisible = {isModificaVisible} setIsModificaVisible = {setIsModificaVisible}></ModificaProfiloPopup>
    </div>
  )
}

export default GestioneUtente
