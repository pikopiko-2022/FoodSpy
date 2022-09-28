import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import { getItemByName } from '../../apis/search'
import { getList } from '../../actions/list'
import Search from '../Search'

jest.mock('react-redux')
jest.mock('../../apis/search.js')
jest.mock('../../actions/list')
const getListMockReturn = jest.fn()
const getSearchMockReturn = jest.fn()
getList.mockReturnValue(getListMockReturn)
getItemByName.mockReturnValue(getSearchMockReturn)

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

describe('<Search/>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const fakeDispatch = jest.fn()

  it('gets state list data on initial render', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Search />, { wrapper: BrowserRouter })

    expect(fakeDispatch).toHaveBeenCalledWith(getListMockReturn)
  })
  it('displays search button', async () => {
    const user = userEvent.setup()
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Search />, { wrapper: BrowserRouter })

    const searchButton = screen.getByRole('button', {
      icon: 'faMagnifyingGlass',
    })
    user.click(searchButton, { shiftKey: true })
    expect.assertions(1)
    expect(searchButton).toBeTruthy()
  })
  it('displays search input', async () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Search />, { wrapper: BrowserRouter })

    screen.debug
    const searchInput = screen.getByPlaceholderText('Search')
    fireEvent.change(searchInput, { target: { value: 'milk' } })
    const searchButton = screen.getByRole('button')
    fireEvent.click(searchButton, { shiftKey: true })
    const searchTest = screen.findByTestId('searchInput')

    expect.assertions(3)
    expect(searchTest).toBeTruthy()
    expect(searchTest).not.toBeNull()
    expect(searchInput).toBeInTheDocument()
  })
})
