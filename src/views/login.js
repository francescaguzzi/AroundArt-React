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
      <img
        alt="Logo5016"
        src="/grafiche/6b8e53a2f252584e7e7be3e2f50593d6-300h.png"
        className="login-logo"
      />
      <div className="login-container1">
        <Link to="/" className="login-navlink">
          <img
            alt="closebuttonI532"
            src="/ui-basic/closebuttoni532-mchd.svg"
            className="login-closebutton"
          />
        </Link>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Username"
          className="login-username input"
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          className="login-password input"
        />
        <Link to="/navigazione-mappa" className="login-navlink1">
          <img
            alt="confirmbuttonI532"
            src="/ui-basic/confirmbuttoni532-o9ab.svg"
            className="login-confirmbutton"
          />
        </Link>
      </div>
    </div>
  )
}

export default Login
