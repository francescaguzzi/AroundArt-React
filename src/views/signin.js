import React from 'react'

import { Helmet } from 'react-helmet'

import './signin.css'

const Signin = (props) => {
  return (
    <div className="signin-container">
      <Helmet>
        <title>Signin - exported project</title>
        <meta property="og:title" content="Signin - exported project" />
      </Helmet>
    </div>
  )
}

export default Signin
