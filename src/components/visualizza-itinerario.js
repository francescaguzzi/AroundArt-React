import React, { useMemo, useState } from 'react'

import PropTypes from 'prop-types'

import Map, { Marker, Source, Layer } from 'react-map-gl';
import maplibregl from 'maplibre-gl';

import OperaLista from './opera-lista'
import './visualizza-itinerario.css'

import {useOpere} from '../opere-context'

const VisualizzaItinerario = (props) => {

  const [schermataAttiva, setSchermataAttiva] = useState(0)
  /* const listFavorites = [
    {artista: "Exit Enter", image_src: "/opere/exit_via-belle-arti-%232_0-200h.jpg", indirizzo: "Via delle Belle Arti"},
    {artista: "EricaIlCane", image_src: "/opere/serranda_via%20mascarella%2026a%2C%20modo%20-200h.jpg", indirizzo: "via Mascarella 26A, libreria Moda Infoshop"},
    {artista: "500 Anni dalla Conquista dell'America", image_src: "/opere/gutierrez_zamboni3-200h.png", indirizzo: "Via Zamboni 38"}
  ]
  const [list, setList] = useState(listFavorites); */

  const {getPreferiti} = useOpere();
  const [list, setList] = useState(getPreferiti());
  const [itineraryCoordinates, setItineraryCoordinates] = useState([]);

  const drawItinerary = useMemo(() => {

    const coordinates = list.filter((opera) => typeof opera.latitude === 'number' && !isNaN(opera.latitude) &&
                                               typeof opera.longitude === 'number' && !isNaN(opera.longitude))
                            .map((opera) => [opera.longitude, opera.latitude]);

    setItineraryCoordinates(coordinates);

    return coordinates.map((coordinate, index) => (
      <Marker
        key={index}
        latitude={coordinate[1]}
        longitude={coordinate[0]}
      />
    ));
  }, [list]);

  const drawItineraryLines = ({ coordinates }) => {
    
    return useMemo(() => {
      if (coordinates.lenght < 2) {
        return null;
      }

      return (
        <Source type="geojson" data={{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coordinates
          },
        }}>
          <Layer 
            id="lineLayer"
            type="line"
            layout={{
              'line-join': 'round',
              'line-cap': 'round'
            }}
            paint={{
              'line-color': '#FFFFFF',
              'line-width': 8
            }}
          />
        </Source>
      );
    }, [coordinates]);
  };

  return (
    <div className={`visualizza-itinerario-container ${props.rootClassName} `}>
      <h1 id="titolo" className="visualizza-itinerario-titolo">
        {props.titolo}
      </h1>
      {schermataAttiva === 0 && (
        <div className="visualizza-itinerario-schermo1">
          
          <Map mapLib={maplibregl}
            initialViewState={{
              latitude: 44.4949, // Latitudine di Bologna
              longitude: 11.3426, // Longitudine di Bologna
              zoom: 11
            }}
            style={{width: '363px', height: '492px'}}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=IUvgg7ycmWWkPYjWYIG7"
          >
              {drawItinerary}
              {drawItineraryLines({ coordinates: itineraryCoordinates })}

          </Map>

          <div className="visualizza-itinerario-bottoni">
            <button
              type="button"
              className="visualizza-itinerario-modifica button"
              onClick={() => setSchermataAttiva(1)}
            >
              Modifica
            </button>
            <button
              type="button"
              className="visualizza-itinerario-elimina button"
              onClick={() => {setSchermataAttiva(2)}}
            >
              Elimina
            </button>
          </div>
        </div>
      )}
      {schermataAttiva === 1 && (
        <div className="visualizza-itinerario-schermo2">
          <div className="visualizza-itinerario-container1">
          {list.map((item, index) => (
            <OperaLista
              key={index}
              index={index}
              artista={item.artista}
              image_src={item.image_src}
              indirizzo={item.indirizzo}
              titolo={item.titolo}
              list={list}
              setList={setList}
            ></OperaLista>
          ))}
          </div>
          <img
            alt={props.confirmbutton_alt}
            src={props.confirmbutton_src}
            className="visualizza-itinerario-confirmbutton"
            onClick={() => setSchermataAttiva(0)}
          />
        </div>
      )}
      {schermataAttiva === 2 && (
        <div className="visualizza-itinerario-schermo3">
          <span className="visualizza-itinerario-text">
            Sei sicuro di voler eliminare l&apos;itinerario?
          </span>
          <div className="visualizza-itinerario-bottoniconferma">
            <button
              type="button"
              className="visualizza-itinerario-annulla button"
              onClick={() => setSchermataAttiva(0)}
            >
              <span className="visualizza-itinerario-text1">
                {props.text21}
              </span>
            </button>
            <button
              type="button"
              className="visualizza-itinerario-confermaelimina button"
              onClick={() => {props.itineraryVisible(false); props.deleteItinerario()}}

            >
              <span className="visualizza-itinerario-text2">{props.text2}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

VisualizzaItinerario.defaultProps = {
  rootClassName: '',
  titolo: 'Senza titolo',
  text21: 'Annulla',
  imagesrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text2: 'Elimina',
  imagealt: 'image',
  confirmbutton_alt: 'confirmbuttonI532',
  confirmbutton_src: '/ui-basic/confirmbuttoni532-o9ab.svg',
}

VisualizzaItinerario.propTypes = {
  rootClassName: PropTypes.string,
  titolo: PropTypes.string,
  text21: PropTypes.string,
  imagesrc: PropTypes.string,
  text2: PropTypes.string,
  imagealt: PropTypes.string,
  confirmbutton_alt: PropTypes.string,
  confirmbutton_src: PropTypes.string,
}

export default VisualizzaItinerario
