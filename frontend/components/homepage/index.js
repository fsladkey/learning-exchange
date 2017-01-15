import React from 'react'
import { connect } from 'react-redux'
import SlideShow from './slide_show'
import MegaSearch from './mega_search'
import SearchMap from './search_map'
import SearchResults from './search_results'

const fadeIn = node => $(node).hide().fadeIn()

function HomePage({ mapFocus }) {
  const className = mapFocus ? "active" : ''
  return (
    <section ref={ fadeIn } className='homepage'>
      <section className="welcome-group">
        <h1>{ "Find out what's happening near you" }</h1>
        <MegaSearch />
      </section>
      <SlideShow />
      <section className={ className + " results-container" }>
        <SearchResults />
        <SearchMap />
      </section>
    </section>
  )
}

const mapStateToProps = ({ mapFocus }) => {
  return { mapFocus }
}

export default connect(mapStateToProps)(HomePage)
