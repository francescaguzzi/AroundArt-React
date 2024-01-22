import React, { useEffect, useMemo, useState } from 'react'

import PropTypes from 'prop-types'

import Map, { Marker, Source, Layer, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';

import OperaLista from './opera-lista'
import './visualizza-itinerario.css'

import {useOpere} from '../opere-context'

const VisualizzaItinerario = (props) => {

  const {getItinerario, deleteItinerario} = useOpere();
  const [schermataAttiva, setSchermataAttiva] = useState(0);
  
  const [itineraryCoordinates, setItineraryCoordinates] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  const index = props.index;
  const list = getItinerario(index) || [];

  const updateItineraryCoordinates = () => {
    const coordinates = list.filter((opera) => typeof opera.latitude === 'number' && !isNaN(opera.latitude) &&
                                               typeof opera.longitude === 'number' && !isNaN(opera.longitude))
                            .map((opera) => [opera.longitude, opera.latitude]);

    setItineraryCoordinates(coordinates);
  };

  const drawItinerary = itineraryCoordinates.map((coordinate, index) => (
    <Marker
      key={index}
      latitude={coordinate[1]}
      longitude={coordinate[0]}
      onClick={() => setPopupInfo({ coordinate: coordinate, opera: list[index] })}
    />
  ));

  useEffect(() => {
    updateItineraryCoordinates();
  }, [list, schermataAttiva]);

  const drawItineraryLines = ({ coordinates }) => {
    
    if (coordinates.length < 2) {
      return null;
    }

    const lines = [];
    for (let i = 0; i < coordinates.length - 1; i++) {
      lines.push(
        <Source key={i} type="geojson" data={{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [coordinates[i], coordinates[i + 1]],
          },
        }}>
          <Layer 
            id={`lineLayer-${i}`}
            type="line"
            layout={{
              'line-join': 'round',
              'line-cap': 'round',
            }}
            paint={{
              'line-color': '#2a9d8f',
              'line-width': 8,
            }}
          />
        </Source>
      );
    }
  
    return lines;
  }

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
              zoom: 14
            }}
            style={{width: '360px', height: '490px'}}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=IUvgg7ycmWWkPYjWYIG7"
          >
              {drawItinerary}
              {drawItineraryLines({ coordinates: itineraryCoordinates })}

              {popupInfo && (
                <Popup 
                  tipSize={5}
                  anchor="top"
                  longitude={popupInfo.coordinate[0]}
                  latitude={popupInfo.coordinate[1]}
                  closeOnClick={false}
                  onClose={() => setPopupInfo(null)}
                >
                  <div className="visualizza-itinerario-popup">
                    <h3>{popupInfo.opera.titolo}</h3>
                    <p>{popupInfo.opera.indirizzo}</p>
                  </div>
                </Popup>
              )}

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
              typelist={1}
              key={index}
              index={index}
              artista={item.artista}
              image_src={item.immagine}
              indirizzo={item.indirizzo}
              titolo={item.titolo}
              list={list}
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
              onClick={() => {props.itineraryVisible(false); props.handleDeleteItinerario();}}

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
  index: 0,
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
  index: PropTypes.number.isRequired,
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
