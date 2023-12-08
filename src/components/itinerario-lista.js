import React from 'react'

import PropTypes from 'prop-types'

import './itinerario-lista.css'

const ItinerarioLista = (props) => {
  return (
    <div className={`itinerario-lista-container ${props.rootClassName} `}>
      <div className="itinerario-lista-list-item">
        <svg viewBox="0 0 1024 1024" className="itinerario-lista-icon">
          <path
            d="M298.667 158.848v584.405l-213.333 121.899v-584.405zM725.333 865.152v-584.405l213.333-121.899v584.363zM662.827 976.427c3.499 1.835 7.253 3.2 11.264 4.011 2.816 0.597 5.717 0.896 8.576 0.896 7.381 0 14.677-1.963 21.163-5.632l0.64-0.384 298.027-170.283c13.696-7.808 21.419-22.101 21.504-37.035v-682.667c0-23.552-19.115-42.667-42.667-42.667-7.808 0-15.104 2.091-21.163 5.632l-278.827 159.317-320.128-160.085c-3.541-1.792-7.296-3.2-11.264-4.011-2.859-0.555-5.76-0.853-8.619-0.853-7.424 0-14.72 1.963-21.163 5.632l-0.64 0.341-298.027 170.325c-13.696 7.808-21.419 22.101-21.504 37.035v682.667c0 23.552 19.115 42.667 42.667 42.667 7.808 0 15.104-2.091 21.163-5.632l278.827-159.317zM640 282.368v587.264l-256-128v-587.264z"
            className=""
          ></path>
        </svg>
        <div className="itinerario-lista-container1">
          <h1 id="titolo" className="itinerario-lista-titolo">
            {props.titolo}
          </h1>
        </div>
      </div>
      <svg
        viewBox="0 0 877.7142857142857 1024"
        className="itinerario-lista-icon2"
      >
        <path
          d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

ItinerarioLista.defaultProps = {
  titolo: 'Senza titolo',
  rootClassName: '',
}

ItinerarioLista.propTypes = {
  titolo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItinerarioLista
