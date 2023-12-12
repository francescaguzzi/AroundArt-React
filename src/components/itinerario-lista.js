import React from 'react'

import PropTypes from 'prop-types'

import './itinerario-lista.css'

const ItinerarioLista = (props) => {
  return (
    <div className={`itinerario-lista-container ${props.rootClassName} `}>
      <h1 id="titolo" className="itinerario-lista-titolo">
        {props.titolo}
      </h1>
      <svg
        viewBox="0 0 877.7142857142857 1024"
        className="itinerario-lista-icon"
      >
        <path
          d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

ItinerarioLista.defaultProps = {
  titolo: 'Senza titolo',
  rootClassName: '',
}

ItinerarioLista.propTypes = {
  titolo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItinerarioLista
