import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import GestionePreferiti from './views/gestione-preferiti'
import GestioneUtente from './views/gestione-utente'
import GestioneItinerari from './views/gestione-itinerari'
import Home from './views/home'
import AdminHome from './views/admin-home'
import AdminGestioneOpere from './views/admin-gestione-opere'
import NavigazioneMappa from './views/navigazione-mappa'
import AdminGestioneEventi from './views/admin-gestione-eventi'
import VisualizzaEventi from './views/visualizza-eventi'
import Login from './views/login'
import Signin from './views/signin'
import NotFound from './views/not-found'

import { AuthProvider } from './auth-context'

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <Route component={GestionePreferiti} exact path="/gestione-preferiti" />
        <Route component={GestioneUtente} exact path="/gestione-utente" />
        <Route component={GestioneItinerari} exact path="/gestione-itinerari" />
        <Route component={Home} exact path="/" />
        <Route component={AdminHome} exact path="/admin-home" />
        <Route
          component={AdminGestioneOpere}
          exact
          path="/admin-gestione-opere"
        />
        <Route component={NavigazioneMappa} exact path="/navigazione-mappa" />
        <Route
          component={AdminGestioneEventi}
          exact
          path="/admin-gestione-eventi"
        />
        <Route component={VisualizzaEventi} exact path="/visualizza-eventi" />
        <Route component={Login} exact path="/login" />
        <Route component={Signin} exact path="/signin" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
      </AuthProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
