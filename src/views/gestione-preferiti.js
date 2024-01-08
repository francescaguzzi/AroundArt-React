import React, {useState} from 'react'

import { Helmet } from 'react-helmet'

import OperaLista from '../components/opera-lista'
import MainMenu from '../components/main-menu'
import './gestione-preferiti.css'
import {useOpere} from '../opere-context'

const GestionePreferiti = (props) => {
  
  const {getPreferiti} = useOpere();
  const [list, setList] = useState(getPreferiti());

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
          {list.map((item, index) => (
            <OperaLista
              key={index}
              index={index}
              artista={item.artista}
              image_src={item.immagine}
              indirizzo={item.indirizzo}
              titolo={item.titolo}
              list={list}
              setList={setList}
            ></OperaLista>
          ))}
      </div>
      <button type="button" className="gestione-preferiti-button button">
        Crea il tuo itinerario!
      </button>
      <MainMenu rootClassName="main-menu-root-class-name3"></MainMenu>
    </div>
  )
}

export default GestionePreferiti
