import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './elimina-profilo-popup.css'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../auth-context'

const EliminaProfiloPopup = (props) => {
  const history = useHistory();
  const { getRegistrationInfo, deleteUser } = useAuth();
  const { username } = getRegistrationInfo();

  return (
    <div className={`elimina-profilo-popup-container ${props.rootClassName} `}
    style={
      props.isEliminaVisible ? { display: 'block' } : { display: 'none' }
    }>
      <form
        name="modifica-form"
        enctype="text/plain"
        className="elimina-profilo-popup-form"
      >
        <span className="elimina-profilo-popup-text">{props.text1}</span>
        <button
          type="button"
          onClick={() => {
            props.setIsEliminaVisible(false)
            history.push('/')
            deleteUser(username);
          }}
          className="elimina-profilo-popup-confermaelimina button"
        >
          <span className="elimina-profilo-popup-text1">{props.text2}</span>
        </button>
        <button
          type="button"
          onClick={() => props.setIsEliminaVisible(false)}
          className="elimina-profilo-popup-annulla button"
        >
          <span className="elimina-profilo-popup-text2">{props.text21}</span>
        </button>
      </form>
    </div>
  )
}

EliminaProfiloPopup.defaultProps = {
  text2: 'Elimina',
  rootClassName: '',
  text21: 'Annulla',
  text1: 'Sicuro di voler eliminare il profilo?',
}

EliminaProfiloPopup.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text21: PropTypes.string,
  text1: PropTypes.string,
}

export default EliminaProfiloPopup
