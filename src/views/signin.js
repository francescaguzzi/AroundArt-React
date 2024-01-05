
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './signin.css'
import { useAuth } from '../auth-context'

const Signin = (props) => {

  // utilizza lo stato per memorizzare i valori dei campi di input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const { register } = useAuth();

  const handleRegister = () => {
    const registrationInfo = { username, password, email, privacy, newsletter };
    register(registrationInfo);

    console.log('registrazione avvenuta con successo');
  };

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="E-mail"
          className="signin-email input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          className="signin-password input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="signin-privacyy">
          <span className="signin-privacy">
            <span>Ho letto e acconsento l&apos;</span>
            <a
              href="https://isitwednesday.vercel.app/"
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
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
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
          <input 
            type="checkbox" 
            id="newsletter" 
            className="signin-check2" 
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
        </div>
        <Link to="/login" className="signin-navlink1" onClick={handleRegister}>
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
