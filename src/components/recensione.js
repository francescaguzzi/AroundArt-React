import React from 'react'

import PropTypes from 'prop-types'

import './recensione.css'

const Recensione = (props) => {
  return (
    <div className="recensione-samplerecensione">
      <code className="recensione-data">{props.data}</code>
      <span className="recensione-user">{props.username}</span>
      <span className="recensione-content">{props.descrizione}</span>
    </div>
  )
}

Recensione.defaultProps = {
  data: '23-01-2015',
  descrizione: 'Lorem ipsum',
  username: 'Username',
}

Recensione.propTypes = {
  data: PropTypes.string,
  descrizione: PropTypes.string,
  username: PropTypes.string,
}

export default Recensione
