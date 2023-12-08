import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Recensione from './recensione'
import './visualizza-opera.css'

const VisualizzaOpera = (props) => {
  const [schedaAttiva, setSchedaAttiva] = useState(0)
  return (
    <div className="visualizza-opera-container">
      {schedaAttiva === 0 && (
        <div className="visualizza-opera-scheda-opera">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="visualizza-opera-image1"
          />
          <h4 id="titolo" className="visualizza-opera-titolo">
            {props.titolo}
          </h4>
          <span id="indirizzo" className="visualizza-opera-indirizzo">
            {props.indirizzo}
          </span>
          <span id="data" className="visualizza-opera-data">
            {props.data}
          </span>
          <span id="descrizione" className="visualizza-opera-descrizione">
            {props.descrizione}
          </span>
          <div
            onClick={() => setSchedaAttiva(1)}
            className="visualizza-opera-bottonerecensioni button"
          >
            <span className="visualizza-opera-text">
              <span>
                Vai alle recensioni
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <img
              alt="Vector5332"
              src="/external/vector5332-13aa.svg"
              className="visualizza-opera-vector"
            />
          </div>
          <img
            alt="heartcheckbox5340"
            src="/external/heartcheckbox5340-okuh.svg"
            className="visualizza-opera-heartcheckbox"
          />
        </div>
      )}
      {schedaAttiva === 1 && (
        <div className="visualizza-opera-scheda-recensioni">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setSchedaAttiva(0)}
            className="visualizza-opera-icon"
          >
            <path d="M768 469.333h-309.077l67.669-67.669c33.323-33.323 33.323-87.424 0-120.661-33.323-33.323-87.339-33.323-120.661 0l-273.664 273.664 273.664 273.664c16.64 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003c33.323-33.323 33.323-87.424 0-120.661l-67.669-67.669h309.077c47.104 0 85.333-38.229 85.333-85.333 0-47.147-38.229-85.333-85.333-85.333z"></path>
          </svg>
          <h4 id="titoloRec" className="visualizza-opera-titolo1">
            Titolo
          </h4>
          <div className="visualizza-opera-container1">
            <Recensione
              data="23/01/2024"
              username="Matteo"
              descrizione="Molto bella, l'ho vista ieri!"
            ></Recensione>
            <Recensione
              data="24/02/2024"
              username="Giovanna"
              descrizione="Non mi è piaciuta"
            ></Recensione>
            <Recensione
              data="03/03/2024"
              username="Roberto"
              descrizione="Davvero carino"
            ></Recensione>
          </div>
          <div
            onClick={() => setSchedaAttiva(2)}
            className="visualizza-opera-scrivibottone"
          >
            <img
              alt="Vector5338"
              src="/external/vector5338-v3q.svg"
              className="visualizza-opera-vector1"
            />
          </div>
        </div>
      )}
      {schedaAttiva === 2 && (
        <div className="visualizza-opera-scrivi-recensione">
          <h4 id="titoloRec2" className="visualizza-opera-titolo2">
            Titolo
          </h4>
          <textarea
            id="recensione"
            placeholder="Esprimi il tuo parere sull'opera!"
            className="visualizza-opera-textarea textarea"
          ></textarea>
          <div className="visualizza-opera-container2">
            <button
              id="annulla"
              type="button"
              onClick={() => setSchedaAttiva(1)}
              className="visualizza-opera-annulla button"
            >
              <span>
                <span>Annulla</span>
                <br></br>
              </span>
            </button>
            <button
              id="invia"
              type="button"
              onClick={() => setSchedaAttiva(1)}
              className="visualizza-opera-invia button"
            >
              <span>
                <span>Invia</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

VisualizzaOpera.defaultProps = {
  data1: '2008',
  textareaPlaceholder: 'placeholder',
  titolo2: 'Titolo',
  titolo11: 'Titolo',
  titolo12: 'Titolo',
  titolo1: 'Titolo',
  data: '2008',
  image1Alt1: 'image15331',
  button: 'Button',
  titolo: 'Titolo',
  descrizione: 'Descrizione lorem ipsum bimbumbim',
  indirizzo1: 'Indirizzo',
  indirizzo: 'Indirizzo',
  image1Alt: 'image15331',
  image1Src1: '',
  heading: 'Heading',
  descrizione1: 'Descrizione lorem ipsum bimbumbim',
  image1Src: '',
}

VisualizzaOpera.propTypes = {
  data1: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  titolo2: PropTypes.string,
  titolo11: PropTypes.string,
  titolo12: PropTypes.string,
  titolo1: PropTypes.string,
  data: PropTypes.string,
  image1Alt1: PropTypes.string,
  button: PropTypes.string,
  titolo: PropTypes.string,
  descrizione: PropTypes.string,
  indirizzo1: PropTypes.string,
  indirizzo: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src1: PropTypes.string,
  heading: PropTypes.string,
  descrizione1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default VisualizzaOpera
