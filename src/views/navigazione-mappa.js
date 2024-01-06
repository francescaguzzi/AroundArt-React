import React from 'react'

import { Helmet } from 'react-helmet'

import SearchBar from '../components/search-bar'
import MainMenu from '../components/main-menu'
import VisualizzaOpera from '../components/visualizza-opera'
import './navigazione-mappa.css'

const NavigazioneMappa = (props) => {

  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

  mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbmNlc2NhZ3V6emkiLCJhIjoiY2xyMmYyZGoyMHVieDJrdGFkdW92bjM0dSJ9.RTjIHnc-eOv5c1fe3_xmAg';
  /* var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  }); */


  return (
    <div className="navigazione-mappa-container">
      <Helmet>
        <title>NavigazioneMappa - exported project</title>
        <meta
          property="og:title"
          content="NavigazioneMappa - exported project"
        />
      </Helmet>
      <SearchBar rootClassName="search-bar-root-class-name"></SearchBar>
      <MainMenu rootClassName="main-menu-root-class-name"></MainMenu>
      <VisualizzaOpera
        data="1988"
        titolo="500 Anni dalla Conquista dell'America"
        indirizzo="Via Zamboni 38"
        image1_alt="/opere/gutierrez_zamboni3-200h.png"
        image1_src="/opere/gutierrez_zamboni3-200h.png"
        descrizione='Nato in Colombia ma naturalizzato italiano, Luis Gutierrez, definisce Bologna una “seconda casa” ed è, proprio in una delle sue strade più famose, via Zamboni, che realizza il lavoro dal titolo "500 Anni dalla Conquista dell&apos;America", un’opera antologica per il suo carattere multietnico e per il messaggio di pace e fraternità tra i popoli. '
        image1_src1="/opere/gutierrez_zamboni3-200h.png"
        rootClassName="visualizza-opera-root-class-name"
      ></VisualizzaOpera>

      <div id='map'></div>

      <script>
        var map = new mapboxgl.Map(
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11'
        );
      </script>

    </div>
  )
}

export default NavigazioneMappa
