import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import Nav from '../Nav'
import { useAuth0 } from '@auth0/auth0-react'

const testFunction = jest.fn()
jest.mock('@auth0/auth0-react')
useAuth0.mockReturnValue({
  isLoading: false,
  user: { sub: 'foobar' },
  isAuthenticated: true,
  loginWithRedirect: testFunction,
})

describe('<Nav />', () => {
  // it('links to Lists page when clicked.', () => {
  //   const link = screen.getByRole('link')
  //   expect(link).toHaveAttribute('href', '/list')
  // })
  it('clicking button directs to auth0 page', () => {
    render(<Nav />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    expect(testFunction).toHaveBeenCalled()
  })
})
