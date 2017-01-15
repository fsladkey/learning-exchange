import React from 'react'
import Map from '../shared/map'

export default function EventMap({ event }) {
  return (
    <Map
      items={ [event] }
      center={ event }
      className="event-map"
      zoom={ 16 }
      />
  )
}
