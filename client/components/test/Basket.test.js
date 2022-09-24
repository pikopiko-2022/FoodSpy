import React from 'react'
import '@testing-library/jest-dom'
import { useSelector, useDispatch, Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import { getItems } from '../../actions/basket'
import Basket from '../Basket'

const fakeBasket = { name: 'Milk', quantity: 2 }

const fakeAllItems = [
  {
    id: 1,
    name: 'Milk',
    description: '2L lite blue milk',
    image_url: '/images/milk.jpg',
    location: 'PAKnSAVE Mt Albert',
  },
  {
    id: 2,
    name: 'Bread',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
    location: 'Countdown Grey Lynn',
  },
]

// jest.mock('react-redux')
jest.mock('../../actions/basket')

const fakeDispatch = jest.fn()
const getItemsMockReturn = jest.fn()
getItems.mockReturnValue(fakeAllItems)

describe('<Basket />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const fakeStore = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
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
  it('displays buttons', async () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Basket />
        </BrowserRouter>
      </Provider>
    )
    const button = screen.findByRole('button')
    expect.assertions(1)
    expect(button).toBeTruthy()
  })
  // it('displays the basket component', async () => {
  //   // getItems.mockImplementation(() => Promise.resolve(fakeAllItems))
  //   render(
  //     <Provider store={fakeStore}>
  //       <BrowserRouter>
  //         <Basket />
  //       </BrowserRouter>
  //     </Provider>
  //   )
  //   await userEvent.click(await screen.findByRole('button', { name: /-/i }))
  //   await userEvent.click(await screen.findByRole('button', { name: /+/i }))

  //   expect(screen.queryByRole('button', { name: /-/i })).not.toBeInTheDocument()
  // })
  // it('displays the basket', () => {
  //   // const fakeDispatch = jest.fn()
  //   const fakeSelector = jest.fn()
  //   // getItems.mockReturnValue(fakeAllItems)
  //   useSelector.mockReturnValue(fakeSelector)
  //   // useDispatch.mockReturnValue(fakeDispatch)
  //   render(<Basket />)

  //   expect(fakeSelector).toHaveBeenCalledWith(fakeAllItems)
  //   // expect(getItems.mock.calls[0][1]).toBe(fakeAllItems[1].id)
  // })
  // it('displays buttons based on state', async () => {
  //   getItems.mockImplementation(() => Promise.resolve(fakeAllItems))
  //   render(<Basket />)
  //   await userEvent.click(screen.getByRole('button', { name: /-/i }))
  //   await userEvent.click(screen.getByRole('button', { name: /+/i }))

  //   expect(screen.queryByRole('button', { name: /-/i })).not.toBeInTheDocument()
  // })
})
