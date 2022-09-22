import React from 'react'
import { Link } from 'react-router-dom'
import Update from './Update'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  // faUserSecret,
  // faBinoculars,
  faMagnifyingGlassDollar,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <nav className="nav">
      <h1 className="logo">
        <Link to={'/'}> FoodSpy </Link>
        {/* <FontAwesomeIcon icon={faUserSecret} />
        <FontAwesomeIcon icon={faBinoculars} /> */}
        <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
        <FontAwesomeIcon icon={faCartShopping} />
      </h1>
      {/* click button and direct to the update form to complete */}
      {/* <div className="nav-update-btn"> */}
      {/* <Link to="/update">
        <button className="nav-update-btn">
          Update Item <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
        </button>
      </Link> */}
      {/* </div> */}
    </nav>
  )
}

export default Nav
