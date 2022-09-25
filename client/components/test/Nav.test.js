import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Nav from '../Nav'

describe('<Nav />', () => {
  it('displays the basket button to select', () => {
    render(<Nav />, { wrapper: BrowserRouter })
    const basketButton = screen.getByRole('link', { name: 'My List ~' })
    expect(basketButton).toBeTruthy()
    expect(basketButton).toHaveAttribute('href', '/list')
  })
  it('displays the home logo to select', () => {
    render(<Nav />, { wrapper: BrowserRouter })
    const homeLink = screen.getByRole('link', { name: 'FoodSpy' })
    expect(homeLink).toBeTruthy()
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
