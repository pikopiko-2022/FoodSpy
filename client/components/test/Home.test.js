import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../Home.jsx'
import { BrowserRouter } from 'react-router-dom'

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

  it('shows --Choose item-- before any selection', () => {
    render(
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
