import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import { getAllItems } from '../../apis/apiClient'

jest.mock('../../apis/apiClient.js')

getAllItems.mockImplementation(() =>
  Promise.resolve([
    {
      id: 1,
      item_name: 'Milk',
      description: '2L lite blue milk',
      image_url: '/images/milk.jpeg',
    },
    {
      id: 2,
      item_name: 'Eggs',
      description: '12 Eggs, Tray',
      image_url: '/images/eggs.jpeg',
    },
    {
      id: 3,
      item_name: 'Bread',
      description: 'Loaf of white toast bread',
      image_url: '/images/bread.jpeg',
    },
    {
      id: 4,
      item_name: 'Pasta',
      description: '500g pasta',
      image_url: '/images/pasta.jpg',
    },
  ])
)

describe('<Home/>', () => {
  it('displays item select header', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const heading = screen.getAllByRole('heading')
    expect(heading[1]).toHaveTextContent('What are you looking for?')
  })

  it('shows --Choose item-- before any selection', async () => {
    const { getByTestId, getAllByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const heading = screen.getAllByRole('heading')
    expect(heading[1]).toHaveTextContent('What are you looking for?')

    const itemSelectWhenUnselected = screen.queryByText(/choose item/i)
    expect(itemSelectWhenUnselected).toBeVisible()

    const milkItemWhenUnselected = screen.queryByText(/milk/i)
    expect(milkItemWhenUnselected).not.toBeInTheDocument()

    await sleep(500)

    expect(screen.queryByText(/milk/i)).toBeInTheDocument()

    fireEvent.change(getByTestId('select'), { target: { value: 1 } })
    let options = getAllByTestId('select-option')
    expect(options[0].selected).toBeTruthy()

    fireEvent.click(getByTestId('submit'))
  })

  it('shows --Choose city-- before any selection', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const heading = screen.getAllByRole('heading')
    expect(heading[0]).toHaveTextContent('Where are you?')

    const itemSelectWhenUnselected = screen.queryByText(/choose city/i)
    expect(itemSelectWhenUnselected).toBeVisible()

    const milkItemWhenUnselected = screen.queryByText(/Auckland/i)
    expect(milkItemWhenUnselected).toBeVisible()
  })
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
