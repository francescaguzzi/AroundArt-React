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
          placeholder={props.username_placeholder}
          className="modifica-profilo-popup-username input"
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder={props.password_placeholder}
          className="modifica-profilo-popup-password input"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder={props.email_placeholder}
          className="modifica-profilo-popup-email input"
        />
        <img
          alt={props.confirmbutton_alt}
          src={props.confirmbutton_src}
          onClick={() => setIsVisible(false)}
          className="modifica-profilo-popup-confirmbutton"
        />
        <img
          alt={props.closebutton_alt}
          src={props.closebutton_src}
          onClick={() => setIsVisible(false)}
          className="modifica-profilo-popup-closebutton"
        />
      </form>
    </div>
  )
}

ModificaProfiloPopup.defaultProps = {
  username_placeholder: 'Username',
  closebutton_src: '/ui-basic/closebuttoni532-mchd.svg',
  closebutton_alt: 'closebuttonI532',
  password_placeholder: 'Password',
  email_placeholder: 'E-mail',
  confirmbutton_alt: 'confirmbuttonI532',
  confirmbutton_src: '/ui-basic/confirmbuttoni532-o9ab.svg',
  rootClassName: '',
}

ModificaProfiloPopup.propTypes = {
  username_placeholder: PropTypes.string,
  closebutton_src: PropTypes.string,
  closebutton_alt: PropTypes.string,
  password_placeholder: PropTypes.string,
  email_placeholder: PropTypes.string,
  confirmbutton_alt: PropTypes.string,
  confirmbutton_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ModificaProfiloPopup
