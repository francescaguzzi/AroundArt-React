import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './signin.css'

const Signin = (props) => {
  return (
    <div className="signin-container">
      <Helmet>
        <title>Signin - exported project</title>
        <meta property="og:title" content="Signin - exported project" />
      </Helmet>
      <img
        alt="Logo5016"
        src="/grafiche/6b8e53a2f252584e7e7be3e2f50593d6-300h.png"
        className="signin-logo"
      />
      <div className="signin-container1">
        <Link to="/" className="signin-navlink">
          <img
            alt="closebuttonI532"
            src="/ui-basic/closebuttoni532-mchd.svg"
            className="signin-closebutton"
          />
        </Link>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Username"
          className="signin-username input"
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          className="signin-password input"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="E-mail"
          className="signin-email input"
        />
        <div className="signin-privacyy">
          <span className="signin-privacy">
            <span>Ho letto e acconsento l&apos;</span>
            <a
              href="https://culonudo.com"
              target="_blank"
              rel="noreferrer noopener"
              className="signin-link"
            >
              informativa sulla privacy
            </a>
            <br></br>
          </span>
          <input
            type="checkbox"
            id="privacy"
            required
            className="signin-check1"
          />
        </div>
        <div className="signin-newsletter">
          <span className="signin-news">
            <span>
              Desidero rimanere aggiornato/a sugli eventi in zona attraverso la
              newsletter
            </span>
            <br></br>
          </span>
          <input type="checkbox" id="newsletter" className="signin-check2" />
        </div>
        <Link to="/login" className="signin-navlink1">
          <img
            alt="confirmbuttonI532"
            src="/ui-basic/confirmbuttoni532-o9ab.svg"
            className="signin-confirmbutton"
          />
        </Link>
      </div>
    </div>
  )
}

export default Signin
