import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Recensione from './recensione'
import './visualizza-opera.css'

const VisualizzaOpera = (props) => {

  const [schedaAttiva, setSchedaAttiva] = useState(0)
  var heartcheck = 0

  return (
    <div className={`visualizza-opera-container ${props.rootClassName} `}>
      {schedaAttiva === 0 && (
        <div className="visualizza-opera-scheda-opera">
          <img
            alt={props.image1_alt}
            src={props.image1_src}
            className="visualizza-opera-image1"
          />
          <h4 id="titolo" className="visualizza-opera-titolo">
            {props.titolo}
          </h4>
          <span id="artista" className="visualizza-opera-artista">
            {props.artista}
          </span>
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
              <span className="">
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
            // al click cambia l'immagine
            onClick={(e) => {
              if (heartcheck === 0) {
              e.target.src = '/external/Property 1=heart-fill.svg'
              heartcheck = 1
              } else {
                e.target.src = '/external/heartcheckbox5340-okuh.svg'
                heartcheck = 0
              }
            }}
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
            <path
              d="M768 469.333h-309.077l67.669-67.669c33.323-33.323 33.323-87.424 0-120.661-33.323-33.323-87.339-33.323-120.661 0l-273.664 273.664 273.664 273.664c16.64 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003c33.323-33.323 33.323-87.424 0-120.661l-67.669-67.669h309.077c47.104 0 85.333-38.229 85.333-85.333 0-47.147-38.229-85.333-85.333-85.333z"
              className=""
            ></path>
          </svg>
          <h4 id="titoloRec" className="visualizza-opera-titolo1">
            Titolo
          </h4>
          <div className="visualizza-opera-container1">
            <Recensione
              data="23/01/2024"
              username="Matteo"
              descrizione="Molto bella, l'ho vista ieri!"
              className=""
            ></Recensione>
            <Recensione
              data="24/02/2024"
              username="Giovanna"
              descrizione="Non mi è piaciuta"
              className=""
            ></Recensione>
            <Recensione
              data="03/03/2024"
              username="Roberto"
              descrizione="Davvero carino"
              className=""
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
              <span className="">
                <span className="">Annulla</span>
                <br className=""></br>
              </span>
            </button>
            <button
              id="invia"
              type="button"
              onClick={() => setSchedaAttiva(1)}
              className="visualizza-opera-invia button"
            >
              <span className="">
                <span className="">Invia</span>
                <br className=""></br>
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
  textarea_placeholder: 'placeholder',
  titolo2: 'Titolo',
  titolo11: 'Titolo',
  titolo12: 'Titolo',
  rootClassName: '',
  titolo1: 'Titolo',
  data: '2008',
  image1_alt1: 'image15331',
  button: 'Button',
  titolo: 'Titolo',
  artista: 'Artista',
  descrizione: 'Descrizione lorem ipsum bimbumbim',
  indirizzo1: 'Indirizzo',
  indirizzo: 'Indirizzo',
  image1_alt: 'image15331',
  image1_src1: '',
  heading: 'Heading',
  descrizione1: 'Descrizione lorem ipsum bimbumbim',
  image1_src: '',
}

VisualizzaOpera.propTypes = {
  data1: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  titolo2: PropTypes.string,
  titolo11: PropTypes.string,
  titolo12: PropTypes.string,
  rootClassName: PropTypes.string,
  titolo1: PropTypes.string,
  data: PropTypes.string,
  image1_alt1: PropTypes.string,
  button: PropTypes.string,
  titolo: PropTypes.string,
  artista: PropTypes.string,
  descrizione: PropTypes.string,
  indirizzo1: PropTypes.string,
  indirizzo: PropTypes.string,
  image1_alt: PropTypes.string,
  image1_src1: PropTypes.string,
  heading: PropTypes.string,
  descrizione1: PropTypes.string,
  image1_src: PropTypes.string,
}

export default VisualizzaOpera
