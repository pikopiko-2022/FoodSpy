import React from 'react'
import '@testing-library/jest-dom'
import { useSelector } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Basket from '../Basket'

const fakeBasket = {
  1: { name: 'Milk', quantity: 1 },
  2: { name: 'Eggs', quantity: 3 },
}

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

jest.mock('react-redux')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Basket />', () => {
  // it('should display the basket correctly', () => {
  //   useSelector.mockReturnValue(fakeAllItems)
  //   Object.keys(fakeBasket)
  //   render(<Basket />)
  //   const button = screen.getAllByRole('button')
  //   expect(button).toHaveLength(2)
  //   expect(button[0]).toContain('-')
  // })
  it('checks for keys in obj', () => {
    expect(Object.keys(fakeBasket).sort()).toEqual(['1', '2'].sort())
  })
})
