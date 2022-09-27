import React from 'react'
import { Link } from 'react-router-dom'
import AuthNav from './AuthNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPencil,
  faMagnifyingGlassDollar,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'
import Search from './Search'

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
      <div className="search-bar">
        <Search />
      </div>
      <div className="nav-btns">
        {/* <button className="list-btn">
          <Link className="list" to="/list">
            My List
            <FontAwesomeIcon icon={faPencil} />
          </Link>
        </button> */}
        <div className="login-btn">
          <AuthNav />
        </div>
      </div>
    </nav>
  )
}

export default Nav

