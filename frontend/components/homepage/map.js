import React, { Component } from 'react'
import { connect } from 'react-redux'
import { allResults } from '../../reducers/selectors'
import updateMarkers from '../../utils/update_markers'

class Map extends Component {

  componentDidMount() {
    this.markers = []
    const center = { lat: 40.6681, lng: -73.9806 }
    this.map = new google.maps.Map(this.mapNode, { zoom: 11, center })
  }

  componentWillReceiveProps(nextProps) {
    updateMarkers(this, nextProps.allResults)
  }

  render() {
    const className = this.props.mapFocus ? "active" : ''
    return (
      <div id="map" className={ className } ref={ map => this.mapNode = map }/>
    )
  }
}

const mapStateToProps = (state) => {
  return { allResults: allResults(state) }
}

export default connect(mapStateToProps)(Map)
