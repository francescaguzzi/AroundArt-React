import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import SearchBar from '../components/search-bar';
import MainMenu from '../components/main-menu';
import VisualizzaOpera from '../components/visualizza-opera';
import './navigazione-mappa.css';

// function InteractiveMap() {
//   const [viewport, setViewport] = useState({
//     latitude: 44.4949, // Latitudine di Bologna
//     longitude: 11.3426, // Longitudine di Bologna
//   });

//   return <Map {...viewport} style={{
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0
//   }} 
//   mapStyle="https://api.maptiler.com/maps/streets/style.json?key=IUvgg7ycmWWkPYjWYIG7"
//   />;
// }

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
      <Map mapLib={maplibregl}
        initialViewState={{
          latitude: 44.4949, // Latitudine di Bologna
          longitude: 11.3426, // Longitudine di Bologna
          zoom: 13
        }}
        style={{with: '100%', height: '100vh'}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=IUvgg7ycmWWkPYjWYIG7"
      >
          <NavigationControl position="top-right"></NavigationControl>
          <Marker latitude={44.4971085} longitude={11.3516271}/>
      </Map>

      <SearchBar rootClassName="search-bar-root-class-name" />
      <MainMenu rootClassName="main-menu-root-class-name" />
      <VisualizzaOpera
        data="1988"
        titolo="500 Anni dalla Conquista dell'America"
        indirizzo="Via Zamboni 38"
        image1_alt="/opere/gutierrez_zamboni3-200h.png"
        image1_src="/opere/gutierrez_zamboni3-200h.png"
        descrizione='Nato in Colombia ma naturalizzato italiano, Luis Gutierrez, definisce Bologna una “seconda casa” ed è, proprio in una delle sue strade più famose, via Zamboni, che realizza il lavoro dal titolo "500 Anni dalla Conquista dell&apos;America", un’opera antologica per il suo carattere multietnico e per il messaggio di pace e fraternità tra i popoli. '
        image1_src1="/opere/gutierrez_zamboni3-200h.png"
        rootClassName="visualizza-opera-root-class-name"
      />
     
    </div>
  );
};

export default NavigazioneMappa;
