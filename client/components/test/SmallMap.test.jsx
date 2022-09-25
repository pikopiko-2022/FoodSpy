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
    jest.spyOn(ReactGoogleMapsApi, 'useLoadScript').mockReturnValue({
      isLoaded: false,
    })
    render(<SmallMap />)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
  it('displays SmallMap', async () => {
    jest.spyOn(ReactGoogleMapsApi, 'useLoadScript').mockReturnValue({
      isLoaded: true,
    })
    jest
      .spyOn(ReactGoogleMapsApi, 'GoogleMap')
      .mockImplementation((props) => <div>GoogleMap {props.children}</div>)
    jest
      .spyOn(ReactGoogleMapsApi, 'Marker')
      .mockImplementation((props) => (
        <div data-testid={props['data-testid']}>Marker</div>
      ))
    render(<SmallMap location={fakePosition} />)
    const marker = screen.findByTestId('googleMarker')
    expect(marker).toBeTruthy()
    expect(location).toBeTruthy()
  })
})
