import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain="foodspy.au.auth0.com"
          clientId="MzN0Kj533344qLi4cuyD0iWSwqHuIVpC"
          redirectUri={window.location.origin}
          audience="https://foodspy/api"
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
})
