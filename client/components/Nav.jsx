import React from 'react'
import { Link } from 'react-router-dom'
import AuthNav from '../components/auth/auth-nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPencil,
  faMagnifyingGlassDollar,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <Link className="nav-logo" to={'/'}>
          {' '}
          FoodSpy{' '}
        </Link>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <div className="nav-btns">
        <div className="list-btn">
          <button>
            <Link className="list" to="/list">
              My List ~
              {/* <FontAwesomeIcon icon={faMagnifyingGlassDollar} /> */}
              <FontAwesomeIcon icon={faPencil} />
            </Link>
          </button>
        </div>
        <div className="login-btn">
          <AuthNav />
        </div>
      </div>
    </nav>
  )
}

export default Nav
