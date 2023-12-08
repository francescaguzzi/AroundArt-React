import React from 'react'

import PropTypes from 'prop-types'

import './evento-lista.css'

const EventoLista = (props) => {
  return (
    <div className={`evento-lista-container ${props.rootClassName} `}>
      <div className="evento-lista-container1">
        <h1 id="titolo" className="evento-lista-titolo">
          {props.titolo}
        </h1>
        <p id="artista" className="evento-lista-artista">
          {props.luogo}
        </p>
        <p id="indirizzo" className="evento-lista-artista1">
          {props.data}
        </p>
      </div>
    </div>
  )
}

EventoLista.defaultProps = {
  rootClassName: '',
  titolo: 'Senza titolo',
  data: 'data',
  luogo: 'luogo',
}

EventoLista.propTypes = {
  rootClassName: PropTypes.string,
  titolo: PropTypes.string,
  data: PropTypes.string,
  luogo: PropTypes.string,
}

export default EventoLista
