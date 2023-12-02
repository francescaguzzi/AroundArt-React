import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

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
      <div className="navigazione-mappa-container1">
        <div className="navigazione-mappa-container2">
          <Script
            html={`<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=11.309823989868166%2C44.473787379849135%2C11.368188858032228%2C44.51266581694186&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=14/44.4932/11.3390">Visualizza mappa ingrandita</a></small>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default NavigazioneMappa
