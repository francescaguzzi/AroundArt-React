import React from 'react'

import { Helmet } from 'react-helmet'

import SearchBar from '../components/search-bar'
import MainMenu from '../components/main-menu'
import VisualizzaOpera from '../components/visualizza-opera'
import './navigazione-mappa.css'

// prep for leaflet

<>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossorigin="" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      crossorigin="">
  </script>
</>

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

      <div className="map-container">
        <MapContainer
          center={[44.4949, 11.3426]} // Coordinate di Bologna
          zoom={13}
          style={{ height: 'calc(100vh - 60px)', width: '100%', position: 'absolute', top: '60px', zIndex: 0 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>

    </div>
  )
}

export default NavigazioneMappa
