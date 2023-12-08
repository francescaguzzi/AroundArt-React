import React, { useState } from 'react'

import PropTypes from 'prop-types'

import OperaLista from './opera-lista'
import './visualizza-itinerario.css'

const VisualizzaItinerario = (props) => {
  const [schermataAttiva, setSchermataAttiva] = useState(0)
  return (
    <div className={`visualizza-itinerario-container ${props.rootClassName} `}>
      <h1 id="titolo" className="visualizza-itinerario-titolo">
        {props.titolo}
      </h1>
      {schermataAttiva === 0 && (
        <div className="visualizza-itinerario-schermo1">
          <img
            src="/altro/screenshot%202023-12-07%20205909-400w.png"
            className="visualizza-itinerario-image"
          />
          <div className="visualizza-itinerario-bottoni">
            <button
              type="button"
              className="visualizza-itinerario-modifica button"
            >
              Modifica
            </button>
            <button
              type="button"
              className="visualizza-itinerario-elimina button"
            >
              Elimina
            </button>
          </div>
        </div>
      )}
      {schermataAttiva === 1 && (
        <div className="visualizza-itinerario-schermo2">
          <div className="visualizza-itinerario-container1">
            <OperaLista
              artista="Exit Enter"
              imageSrc="/opere/exit_via-belle-arti-%232_0-200h.jpg"
              indirizzo="Via delle Belle Arti"
              rootClassName="opera-lista-root-class-name2"
              className=""
            ></OperaLista>
            <OperaLista
              artista="EricaIlCane"
              imageSrc="/opere/serranda_via%20mascarella%2026a%2C%20modo%20-200h.jpg"
              indirizzo="via Mascarella 26A, libreria Moda Infoshop"
              className=""
            ></OperaLista>
            <OperaLista
              titolo="500 Anni dalla Conquista dell'America"
              artista="Luis Gutierrez"
              imageSrc="/opere/gutierrez_zamboni3-200h.png"
              indirizzo="Via Zamboni 38"
              className=""
            ></OperaLista>
          </div>
          <img
            alt={props.confirmbuttonAlt}
            src={props.confirmbuttonSrc}
            className="visualizza-itinerario-confirmbutton"
          />
        </div>
      )}
      {schermataAttiva === 2 && (
        <div className="visualizza-itinerario-schermo3">
          <span className="visualizza-itinerario-text">
            Sei sicuro di voler eliminare l&apos;itinerario?
          </span>
          <div className="visualizza-itinerario-bottoniconferma">
            <button
              type="button"
              className="visualizza-itinerario-annulla button"
            >
              <span className="visualizza-itinerario-text1">
                {props.text21}
              </span>
            </button>
            <button
              type="button"
              className="visualizza-itinerario-confermaelimina button"
            >
              <span className="visualizza-itinerario-text2">{props.text2}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

VisualizzaItinerario.defaultProps = {
  titolo: 'Senza titolo',
  imagesrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imagealt: 'image',
  confirmbuttonAlt: 'confirmbuttonI532',
  confirmbuttonSrc: '/ui-basic/confirmbuttoni532-o9ab.svg',
  text2: 'Elimina',
  text21: 'Annulla',
  rootClassName: '',
}

VisualizzaItinerario.propTypes = {
  titolo: PropTypes.string,
  imagesrc: PropTypes.string,
  imagealt: PropTypes.string,
  confirmbuttonAlt: PropTypes.string,
  confirmbuttonSrc: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default VisualizzaItinerario
