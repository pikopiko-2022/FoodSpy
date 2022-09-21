import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '800px',
  height: '400px',
}

function Map() {
  const center = useMemo(() => ({ lat: -36.85836, lng: 174.7488 }), [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className="map">
      <GoogleMap zoom={12} center={center} mapContainerStyle={containerStyle}>
        {/* Pak n save mt albert address */}
        <Marker
          position={{ lat: -36.893051, lng: 174.706238 }}
          title="Pak n Save, Mt Albert"
        />
        {/* Countdown grey lynn address */}
        <Marker
          position={{ lat: -36.85836, lng: 174.7488 }}
          title="Countdown, Grey Lynn"
        />
        {/* New World Victoria park address */}
        <Marker
          position={{ lat: -36.84829, lng: 174.75101 }}
          title="New World, Victoria Park"
        />
      </GoogleMap>
    </div>
  )
}

export default Map
