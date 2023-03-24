import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWalkLocation } from 'redux/slice/walkIndex/walkIndexSlice'

interface locationType {
  loaded: boolean
  coordinates?: { lat: number; lng: number }
  error?: { code: number; message: string }
}

const WalkLocation = () => {
  const dispatch = useDispatch()
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  })

  const onSuccess = (location: {
    coords: { latitude: number; longitude: number }
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    })
    dispatch(
      getWalkLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }),
    )
  }

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    })
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return (
    <div>
      <p className="mb-20">{`좌표 ${location.coordinates?.lat},${location.coordinates?.lng}`}</p>
    </div>
  )
}

export default WalkLocation
