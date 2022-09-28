import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Nav from '../Nav'

const fakeDispatch = jest.fn()
const fakeStore = {
  subscribe: jest.fn(),
  dispatch: fakeDispatch,
  getState: jest.fn(() => {
    return { store: { name: 'Milk', quantity: 2 } }
  }),
}

describe('<Nav />', () => {
  it('displays the search button to select', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    )
    const searchButton = screen.getAllByRole('button', {
      icon: 'faMagnifyingGlass',
    })
    expect(searchButton[0]).toBeTruthy()
  })
  it('displays the home logo to select', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    )
    const homeLink = screen.getByRole('link', { name: 'FoodSpy' })
    expect(homeLink).toBeTruthy()
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
