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
          src="/grafiche/6b8e53a2f252584e7e7be3e2f50593d6-500h.png"
          className="home-logo"
        />
        <Link to="/signin" className="home-registrati button">
          <span className="home-text">
            <span>Registrati</span>
            <br></br>
          </span>
        </Link>
        <Link to="/login" className="home-accedi button">
          <span className="home-text3">
            <span>Accedi</span>
          </span>
        </Link>
      </main>
    </div>
  )
}

export default Home
