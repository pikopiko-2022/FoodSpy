import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import Basket from '../Basket'

const fakeBasket = { name: 'Milk', quantity: 2 }

describe('<Basket />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const fakeDispatch = jest.fn()
  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: fakeDispatch,
    getState: jest.fn(() => {
      return { basket: fakeBasket }
    }),
  }

  it('gets name and quantity from redux state', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Basket />
        </BrowserRouter>
      </Provider>
    )
    const itemName = screen.findByText(fakeBasket.name, {
      exact: false,
    })
    const itemQuantity = screen.findByText(fakeBasket.quantity)
    expect.assertions(2)
    expect(itemName).toBeTruthy()
    expect(itemQuantity).toBeTruthy()
  })
  it('displays minus button', async () => {
    const user = userEvent.setup()
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Basket />
        </BrowserRouter>
      </Provider>
    )
    const minusButton = screen.findByRole('button', { name: /-/i })
    user.click(minusButton)
    expect.assertions(2)
    expect(minusButton).toBeTruthy()
    expect(minusButton).not.toBeNull()
  })
  it('displays plus button', async () => {
    const user = userEvent.setup()
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Basket />
        </BrowserRouter>
      </Provider>
    )
    const plusButton = screen.findByRole('button', { name: '+' })
    user.click(plusButton)
    expect.assertions(2)
    expect(plusButton).toBeTruthy()
    expect(plusButton).not.toBeNull()
  })
})
