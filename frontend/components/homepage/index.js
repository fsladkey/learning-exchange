import React from 'react'
import SlideShow from './slide_show'
import MegaSearch from './mega_search'
import Map from './map'

export default function HomePage(props) {
  return (
    <section className='homepage'>
      <section className="welcome-group">
        <h1>{ "Find out what's happening near you" }</h1>
        <MegaSearch />
      </section>
      <SlideShow />
      <Map />
    </section>
  )
}
