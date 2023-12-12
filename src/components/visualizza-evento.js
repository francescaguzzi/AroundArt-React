import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './visualizza-evento.css'

const VisualizzaEvento = (props) => {
  const [schedaAttiva, setSchedaAttiva] = useState(0)
  return (
    <div className={`visualizza-evento-container ${props.rootClassName} `}>
      <div className="visualizza-evento-scheda-opera">
        <h4 id="titolo" className="visualizza-evento-titolo">
          {props.titolo}
        </h4>
        <span id="indirizzo" className="visualizza-evento-indirizzo">
          {props.indirizzo}
        </span>
        <span id="data" className="visualizza-evento-data">
          {props.data}
        </span>
        <span id="descrizione" className="visualizza-evento-descrizione">
          {props.descrizione}
        </span>
        <svg viewBox="0 0 1024 1024" className="visualizza-evento-icon">
          <path
            d="M768 469.333h-309.077l67.669-67.669c33.323-33.323 33.323-87.424 0-120.661-33.323-33.323-87.339-33.323-120.661 0l-273.664 273.664 273.664 273.664c16.64 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003c33.323-33.323 33.323-87.424 0-120.661l-67.669-67.669h309.077c47.104 0 85.333-38.229 85.333-85.333 0-47.147-38.229-85.333-85.333-85.333z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

VisualizzaEvento.defaultProps = {
  indirizzo: 'Indirizzo',
  image1_alt: 'image15331',
  data: '2008',
  descrizione: 'Descrizione lorem ipsum bimbumbim',
  titolo12: 'Titolo',
  image1_src: '',
  titolo1: 'Titolo',
  titolo: 'Titolo',
  rootClassName: '',
}

VisualizzaEvento.propTypes = {
  indirizzo: PropTypes.string,
  image1_alt: PropTypes.string,
  data: PropTypes.string,
  descrizione: PropTypes.string,
  titolo12: PropTypes.string,
  image1_src: PropTypes.string,
  titolo1: PropTypes.string,
  titolo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default VisualizzaEvento
