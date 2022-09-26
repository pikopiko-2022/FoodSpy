import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import * as ReactGoogleMapsApi from '@react-google-maps/api'

import Map from '../Map'

describe('<Map/>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('shows the loader', () => {
    jest.spyOn(ReactGoogleMapsApi, 'useLoadScript').mockReturnValue({
      isLoaded: false,
    })
    render(<Map />)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
  it('displays Map', async () => {
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
    render(<Map />)
    const map = screen.findByTestId('googleMap')
    expect(map).toBeTruthy()
  })
})
