import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

describe('<Home/>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const fakeDispatch = jest.fn()
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: fakeDispatch,
    getState: jest.fn(() => {
      return { store: { id: 1, name: 'Milk' } }
    }),
  }

  it('displays item select header', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )
    const heading = screen.getAllByRole('heading')
    expect(heading[1]).toHaveTextContent('What are you looking for?')
  })
  it('shows --Choose city-- before any selection', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )
    const heading = screen.getAllByRole('heading')
    expect(heading[0]).toHaveTextContent('Where are you?')

    const itemSelectWhenUnselected = screen.queryByText(/choose city/i)
    expect(itemSelectWhenUnselected).toBeVisible()

    const milkItemWhenUnselected = screen.queryByText(/Auckland/i)
    expect(milkItemWhenUnselected).toBeVisible()
  })
})
