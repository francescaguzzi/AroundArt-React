import React from 'react'

import { Helmet } from 'react-helmet'

import SearchBar from '../components/search-bar'
import MainMenu from '../components/main-menu'
import './navigazione-mappa.css'

const NavigazioneMappa = (props) => {
  return (
    <div className="navigazione-mappa-container">
      <Helmet>
        <title>NavigazioneMappa - exported project</title>
        <meta
          property="og:title"
          content="NavigazioneMappa - exported project"
        />
      </Helmet>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1ctIRrSf7MX488x6zcixQ5RZs_8jiUBM&amp;ehbc=2E312F&amp;noprof=1"
        className="navigazione-mappa-iframe"
      ></iframe>
      <SearchBar rootClassName="search-bar-root-class-name"></SearchBar>
      <MainMenu rootClassName="main-menu-root-class-name"></MainMenu>
    </div>
  )
}

export default NavigazioneMappa
