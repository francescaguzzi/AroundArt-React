import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - exported project</title>
        <meta property="og:title" content="Login - exported project" />
      </Helmet>
      <div className="login-login"></div>
      <div className="login-frame">
        <img
          alt="Logo5016"
          src="/images/6b8e53a2f252584e7e7be3e2f50593d6-400h.png"
          className="login-logo"
        />
        <button className="login-loginbuttons">
          <img
            alt="loginpopupI532"
            src="/ui-basic/login-popup-400h.png"
            className="login-loginpopup"
          />
          <div className="login-password input">
            <span className="login-text">
              <span>Password</span>
              <br></br>
            </span>
          </div>
          <div className="login-username input">
            <span className="login-text3">
              <span>
                <span>Nome utente</span>
                <br></br>
                <span></span>
              </span>
            </span>
          </div>
          <img
            alt="confirmbuttonI532"
            src="/ui-basic/confirmbuttoni532-o9ab.svg"
            className="login-confirmbutton"
          />
          <Link to="/" className="login-navlink">
            <img
              alt="closebuttonI532"
              src="/ui-basic/closebuttoni532-mchd.svg"
              className="login-closebutton"
            />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Login
