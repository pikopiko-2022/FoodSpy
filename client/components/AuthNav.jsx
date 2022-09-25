import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function AuthNav() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()

  const handleLogIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  const handleLogOff = (e) => {
    e.preventDefault()
    logout({
      returnTo: window.location.origin,
    })
  }

  return (
    <div className="login-btn">
      {isAuthenticated ? (
        <button className="btn" onClick={handleLogOff}>
          Log Out
        </button>
      ) : (
        <button className="btn" onClick={handleLogIn}>
          Log In
        </button>
      )}
    </div>
  )
}

export default AuthNav
