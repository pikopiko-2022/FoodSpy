import React from 'react'
import { Link } from 'react-router-dom'
import AuthNav from './AuthNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlassDollar,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <nav className="nav">
      <h1 className="logo">
        <Link to={'/'}> FoodSpy </Link>
        <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
        <FontAwesomeIcon icon={faCartShopping} />
      </h1>

      <div className="nav-btn">
        <AuthNav />
        <Link to="/list">
          <button className="nav-list-btn">
            Basket <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
