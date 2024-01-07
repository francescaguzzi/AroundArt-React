import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import SearchBar from '../components/search-bar';
import MainMenu from '../components/main-menu';
import VisualizzaOpera from '../components/visualizza-opera';
import './navigazione-mappa.css';

import opere from '../datasets/opere.json';

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

  const [selectedOpera, setSelectedOpera] = useState(null);

  return (
    <div className="navigazione-mappa-container">
      <Helmet>
        <title>NavigazioneMappa - exported project</title>
        <meta
          property="og:title"
          content="NavigazioneMappa - exported project"
        />
      </Helmet>

      <SearchBar rootClassName="search-bar-root-class-name" />

      <Map mapLib={maplibregl}
        initialViewState={{
          latitude: 44.4949, // Latitudine di Bologna
          longitude: 11.3426, // Longitudine di Bologna
          zoom: 11
        }}
        style={{width: '100%', height: '100vh'}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=IUvgg7ycmWWkPYjWYIG7"
      >
          <NavigationControl position="top-right"></NavigationControl>

          {opere.map((opera, index) => (
            <Marker 
              key={index} 
              latitude={opera.latitudine} 
              longitude={opera.longitudine}
              onClick={() => setSelectedOpera(opera)}
            />
          ))}
    
      </Map>

      <MainMenu rootClassName="main-menu-root-class-name" />
      
      {selectedOpera && (
        <VisualizzaOpera
          rootClassName="visualizza-opera-root-class-name"
          image1_alt={selectedOpera.immagine}
          image1_src={selectedOpera.immagine}
          titolo={selectedOpera.titolo}
          artista={selectedOpera.artista}
          indirizzo={selectedOpera.indirizzo}
          data={selectedOpera.data}
          descrizione={selectedOpera.descrizione}
        />
      )}
     
    </div>
  );
};

export default NavigazioneMappa;
