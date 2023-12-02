import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <main className="home-home">
        <img
          alt="Logo647"
          src="/images/6b8e53a2f252584e7e7be3e2f50593d6-1500w.png"
          className="home-logo"
        />
        <button className="home-loginbuttons">
          <Link to="/signin" className="home-navlink">
            <div className="home-signinbutton">
              <img
                alt="Rectangle1I532"
                src="/ui-basic/rectangle1i532-7jpx.svg"
                className="home-rectangle1"
              />
              <span className="home-text">
                <span>Registrati</span>
              </span>
            </div>
          </Link>
          <Link to="/login" className="home-navlink1">
            <div className="home-loginbutton">
              <img
                alt="Rectangle1I532"
                src="/ui-basic/rectangle1i532-tnn9.svg"
                className="home-rectangle11"
              />
              <span className="home-text2">
                <span>Accedi</span>
              </span>
            </div>
          </Link>
        </button>
      </main>
    </div>
  )
}

export default Home
