import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import { getList } from '../../actions/list'
import { getPrice } from '../../actions/price'
import { getItems } from '../../actions/basket'
import List from '../List'

const fakeAllItems = [
  {
    id: 1,
    name: 'Milk',
    description: '2L lite blue milk',
    image_url: '/images/milk.jpg',
    location: 'PAKnSAVE Mt Albert',
    price: 3.95,
  },
  {
    id: 2,
    name: 'Bread',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
    location: 'Countdown Grey Lynn',
    price: 1.2,
  },
]

jest.mock('../../actions/list')
jest.mock('../../actions/price')
jest.mock('../../actions/basket')
jest.mock('react-redux')
const getListMockReturn = jest.fn()
const getPriceMockReturn = jest.fn()
const getItemsMockReturn = jest.fn()
getList.mockReturnValue(getListMockReturn)
getPrice.mockReturnValue(getPriceMockReturn)
getItems.mockReturnValue(getItemsMockReturn)

describe('<List/>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const fakeDispatch = jest.fn()

  it('gets state list data on initial render', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<List />)

    expect(fakeDispatch).toHaveBeenCalledWith(getListMockReturn)
  })
  it('gets state item data on initial render', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<List />)

    expect(fakeDispatch).toHaveBeenCalledWith(getItemsMockReturn)
  })
  it('shows images of food items', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<List />)

    const image = screen.getAllByRole('img')
    expect(image).toBeTruthy()
    expect(image).toHaveLength(2)
    expect(image[0].src).toContain('milk')
  })
  it('displays headings', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<List />)

    const levelTwoHeading = screen.getAllByRole('heading', { level: 2 })
    expect(levelTwoHeading).toHaveLength(2)
  })
  it('onKeyDown event on image initiates getPrice dispatch', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<List />)

    const button = screen.getAllByRole('button')
    fireEvent.keyDown(button[0], { key: 'Enter', keyCode: 13 })
    expect(fakeDispatch).toHaveBeenCalledWith(getPriceMockReturn)
    expect(getPrice.mock.calls[0][0]).toBe(fakeAllItems[0].id)
  })
  it('onClick event on image sets basket', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<List />)

    const click = screen.getAllByRole('button')
    fireEvent.click(click[0], { shiftKey: true })
    expect(click[0]).not.toBeNull()
  })
})
