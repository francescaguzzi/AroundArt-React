import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  const [isOnUser, setIsOnUser] = useState(true)
  return (
    <nav id="buttons-login" className="menu-container">
      <div className="menu-menu">
        <img
          alt="menucomponent4519"
          src={props.menucomponent_src1}
          className="menu-menucomponent"
        />
      </div>
    </nav>
  )
}

Menu.defaultProps = {
  menucomponent_src1: '/external/menucomponent4519-impj.svg',
}

Menu.propTypes = {
  menucomponent_src1: PropTypes.string,
}

export default Menu
