import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './modifica-profilo-popup.css'

const ModificaProfiloPopup = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={`modifica-profilo-popup-container ${props.rootClassName} `}>
      <form
        name="modifica-form"
        enctype="text/plain"
        className="modifica-profilo-popup-form"
      >
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder={props.usernamePlaceholder}
          className="modifica-profilo-popup-username input"
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder={props.passwordPlaceholder}
          className="modifica-profilo-popup-password input"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder={props.emailPlaceholder}
          className="modifica-profilo-popup-email input"
        />
        <img
          alt={props.confirmbuttonAlt}
          src={props.confirmbuttonSrc}
          onClick={() => setIsVisible(false)}
          className="modifica-profilo-popup-confirmbutton"
        />
        <img
          alt={props.closebuttonAlt}
          src={props.closebuttonSrc}
          onClick={() => setIsVisible(false)}
          className="modifica-profilo-popup-closebutton"
        />
      </form>
    </div>
  )
}

ModificaProfiloPopup.defaultProps = {
  usernamePlaceholder: 'Username',
  closebuttonSrc: '/ui-basic/closebuttoni532-mchd.svg',
  closebuttonAlt: 'closebuttonI532',
  passwordPlaceholder: 'Password',
  emailPlaceholder: 'E-mail',
  confirmbuttonAlt: 'confirmbuttonI532',
  confirmbuttonSrc: '/ui-basic/confirmbuttoni532-o9ab.svg',
  rootClassName: '',
}

ModificaProfiloPopup.propTypes = {
  usernamePlaceholder: PropTypes.string,
  closebuttonSrc: PropTypes.string,
  closebuttonAlt: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  confirmbuttonAlt: PropTypes.string,
  confirmbuttonSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ModificaProfiloPopup
