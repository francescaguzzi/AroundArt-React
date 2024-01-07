
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './login.css'
import { useAuth } from '../auth-context'
import { useHistory } from 'react-router-dom';

const Login = (props) => {

  // utilizza lo stato per memorizzare i valori dei campi di input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const { login, users } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    
    const user = users.find((user) => user.username === username && user.password === password);
    
    if (user || username === 'admin' && password === 'admin') {
      login(username);
      console.log('login avvenuto con successo');
      history.push('/navigazione-mappa'); // naviga verso la pagina di destinazione

    } else {
      console.log('username o password errati');
      setErrorMessage('    Credenziali non valide. Riprova.');
    }
  }


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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          className="login-password input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <div className="login-error-message">{errorMessage}</div>}
        <button className="login-navlink1" onClick={handleLogin}>
          <img
            alt="confirmbuttonI532"
            src="/ui-basic/confirmbuttoni532-o9ab.svg"
            className="login-confirmbutton"
          />
        </button>
      </div>
    </div>
  )
}

export default Login
