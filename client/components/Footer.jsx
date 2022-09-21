import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <h2>FoodSpy 2022</h2>
      <div className="footer-socials">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </footer>
  )
}

export default Footer
