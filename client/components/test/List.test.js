import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { useSelector, Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

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
