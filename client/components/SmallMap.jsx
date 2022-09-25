import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '260px',
  height: '220px',
}

function SmallMap({ location }) {
  const center = useMemo(() => ({ lat: -36.8723, lng: 174.7312 }), [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>

  function marker() {
    let position = {}
    if (location == 'PAKnSAVE Mt Albert') {
      return (position = { lat: -36.893051, lng: 174.706238 })
    } else if (location == 'Countdown Grey Lynn') {
      return (position = { lat: -36.85836, lng: 174.7488 })
    } else if (location == 'New World Victoria') {
      return (position = { lat: -36.84829, lng: 174.75101 })
    } else {
      return position
    }
  }

  return (
    <div className="map">
      <GoogleMap zoom={12} center={center} mapContainerStyle={containerStyle}>
        <Marker position={marker()} title={location} />
      </GoogleMap>
    </div>
  )
}

export default SmallMap
