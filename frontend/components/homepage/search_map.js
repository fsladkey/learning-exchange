import React, { Component } from 'react'
import { connect } from 'react-redux'
import { allResults } from '../../reducers/selectors'
import Map from '../shared/map'

function SearchMap({ allResults, currentUser, mapFocus }) {
  let classNames = ['result-pane', 'search-map']
  if (mapFocus) classNames.push("active")
  return (
    <Map
      items={ allResults.toJS() }
      center={ currentUser }
      className={ classNames.join(' ') }
      />
  )
}

const mapStateToProps = (state) => {
  return {
    allResults: allResults(state),
    currentUser: state.currentUser,
    mapFocus: state.mapFocus
  }
}

export default connect(mapStateToProps)(SearchMap)
