import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AuthNav from '../Nav'
import { useAuth0 } from '@auth0/auth0-react'

jest.mock('@auth0/auth0-react')
useAuth0.mockReturnValue({
  isAuthenticated: false,
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
})

const fakeDispatch = jest.fn()
const fakeStore = {
  subscribe: jest.fn(),
  dispatch: fakeDispatch,
  getState: jest.fn(() => {
    return { store: { name: 'Milk', quantity: 2 } }
  }),
}

describe('< AuthNav/>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('displays Log In button correctly', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <AuthNav />
        </BrowserRouter>
      </Provider>
    )
    const loginButton = screen.getByRole('button', { name: 'Log In' })
    expect(loginButton).toBeTruthy()
  })
  it('displays Log Out button correctly', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    })
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <AuthNav />
        </BrowserRouter>
      </Provider>
    )
    const logoutButton = screen.getByRole('button', { name: 'Log Out' })
    expect(logoutButton).toBeTruthy()
  })
  it('onClick event on Log In button works', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    })
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <AuthNav />
        </BrowserRouter>
      </Provider>
    )

    const login = screen.getByRole('button', { name: 'Log In' })
    fireEvent.click(login, { shiftKey: true })
    expect(login).not.toBeNull()
    expect(login).toBeTruthy()
  })
  it('onClick event on Log Out button works', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    })
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <AuthNav />
        </BrowserRouter>
      </Provider>
    )

    const logout = screen.getByRole('button', { name: 'Log Out' })
    fireEvent.click(logout, { shiftKey: true })
    expect(logout).not.toBeNull()
    expect(logout).toBeTruthy()
  })
})
