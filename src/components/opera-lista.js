import React from 'react'

import PropTypes from 'prop-types'

import './opera-lista.css'

const OperaLista = (props) => {
  return (
    <div className={`opera-lista-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="opera-lista-image"
      />
      <div className="opera-lista-container1">
        <h1 id="titolo" className="opera-lista-titolo">
          {props.titolo}
        </h1>
        <p id="artista" className="opera-lista-artista">
          {props.artista}
        </p>
        <p id="indirizzo" className="opera-lista-artista1">
          {props.indirizzo}
        </p>
      </div>
      <svg viewBox="0 0 1024 1024" className="opera-lista-delete-icon">
        <path
          d="M512 170.667c-188.544 0-341.333 152.832-341.333 341.333s152.789 341.333 341.333 341.333 341.333-152.832 341.333-341.333-152.789-341.333-341.333-341.333zM670.165 609.835c16.683 16.683 16.683 43.648 0 60.331-8.32 8.32-19.243 12.501-30.165 12.501s-21.845-4.181-30.165-12.501l-97.835-97.835-97.835 97.835c-8.32 8.32-19.243 12.501-30.165 12.501s-21.845-4.181-30.165-12.501c-16.683-16.683-16.683-43.648 0-60.331l97.835-97.835-97.835-97.835c-16.683-16.683-16.683-43.648 0-60.331s43.648-16.683 60.331 0l97.835 97.835 97.835-97.835c16.683-16.683 43.648-16.683 60.331 0s16.683 43.648 0 60.331l-97.835 97.835 97.835 97.835z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

OperaLista.defaultProps = {
  indirizzo: 'indirizzo',
  titolo: 'Senza titolo',
  rootClassName: '',
  image_alt: 'image',
  artista: 'artista',
  image_src: '',
}

OperaLista.propTypes = {
  indirizzo: PropTypes.string,
  titolo: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  artista: PropTypes.string,
  image_src: PropTypes.string,
}

export default OperaLista
