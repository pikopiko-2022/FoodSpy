import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Items from '../Items'
import { getList } from '../../actions/list'

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
jest.mock('react-redux')
const getListMockReturn = jest.fn()
const fakeDispatch = jest.fn()
getList.mockReturnValue(getListMockReturn)

describe('<Items />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('gets state list data on initial render', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Items />, { wrapper: BrowserRouter })

    expect(fakeDispatch).toHaveBeenCalledWith(getListMockReturn)
  })
  it('displays first heading correctly', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Items />, { wrapper: BrowserRouter })

    const headings = screen.getAllByRole('heading')
    expect(headings[0]).toHaveTextContent('Sorry, no results found')
  })
  it('displays check prices button correctly', async () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Items />, { wrapper: BrowserRouter })

    const priceButton = screen.getAllByRole('button', { name: 'Check Prices' })
    const click = await fireEvent.click(priceButton[0], { shiftKey: true })
    expect(priceButton[0]).toBeTruthy()
    expect(click).toBeFalsy()
  })
  it('displays item images correctly', () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Items />, { wrapper: BrowserRouter })

    const image = screen.getAllByRole('img')
    expect(image).toBeTruthy()
    expect(image).toHaveLength(2)
    expect(image[0].src).toContain('milk')
  })
  it('clicking item images works', async () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Items />, { wrapper: BrowserRouter })

    const image = screen.getAllByRole('img')
    const click = await fireEvent.click(image[0], { shiftKey: true })
    expect(image[0]).toBeTruthy()
    expect(click).toBeTruthy()
  })
  it('keydown item images works', async () => {
    useSelector.mockReturnValue(fakeAllItems)
    useDispatch.mockReturnValue(fakeDispatch)
    render(<Items />, { wrapper: BrowserRouter })

    const key = screen.getAllByTestId('imageKeyDown')
    const keyDown = await fireEvent.keyPress(key[0], {
      key: 'Enter',
      keyCode: 13,
    })

    expect(keyDown).toBeTruthy()
  })
})
