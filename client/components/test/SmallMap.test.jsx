import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import * as ReactGoogleMapsApi from '@react-google-maps/api'

import SmallMap from '../SmallMap'

const fakePosition = { lat: -36.85836, lng: 174.7488 }

describe('<SmallMap/>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('shows the loader', () => {
    jest.spyOn(ReactGoogleMapsApi, 'useJsApiLoader').mockReturnValue({
      isLoaded: false,
    })
    render(<SmallMap />)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
  it('displays SmallMap', async () => {
    jest.spyOn(ReactGoogleMapsApi, 'useJsApiLoader').mockReturnValue({
      isLoaded: true,
    })
    render(<SmallMap position={fakePosition} />)
    const location = screen.findByText(fakePosition.lat)

    expect(screen.findByRole('document')).toBeTruthy()
    expect(location).not.toBeNull()
  })
})
