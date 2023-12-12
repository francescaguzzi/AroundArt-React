import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './search-bar.css'

const SearchBar = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={`search-bar-container ${props.rootClassName} `}>
      <button
        id="searchbutton"
        type="button"
        onClick={() => setIsVisible(true)}
        className="search-bar-searchbutton button"
      >
        <svg viewBox="0 0 950.8571428571428 1024" className="search-bar-icon">
          <path
            d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"
            className=""
          ></path>
        </svg>
      </button>
      {isVisible && (
        <div className="search-bar-searchbar">
          <input
            type="text"
            id="ricerca"
            placeholder="Cerca opera o categoria..."
            onSubmit={() => setIsVisible(false)}
            className="search-bar-textinput input"
          />
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            onClick={() => setIsVisible(false)}
            className="search-bar-closebutton"
          />
        </div>
      )}
    </div>
  )
}

SearchBar.defaultProps = {
  image_alt1: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  rootClassName: '',
  image_src2: '/external/closeicon2710-77uh.svg',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  searchicon_alt: 'searchicon2314',
  searchicon_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/845d69ee-3bfd-4357-9c75-cfcd407d59a6/3e302343-1f8f-475b-b828-a23973899ed9?org_if_sml=11732&force_format=original',
  textinput_placeholder: 'placeholder',
  text: 'Label',
  image_alt2: 'image',
}

SearchBar.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src2: PropTypes.string,
  image_src: PropTypes.string,
  searchicon_alt: PropTypes.string,
  searchicon_src: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default SearchBar
