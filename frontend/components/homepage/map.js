import React, { Component } from 'react'
import { connect } from 'react-redux'

class Map extends Component {

  componentDidMount() {
    const center = { lat: 40.6681, lng: -73.9806 }
    this.map = new google.maps.Map(this.map, { zoom: 14, center })
  }

  render() {
    const className = this.props.mapFocus ? "active" : ""
    return (
      <div
        id="map"
        className={ className }
        ref={ map => this.map = map }
        />
    )
  }
}

const mapStateToProps = ({ mapFocus }) => ({ mapFocus })

export default connect(mapStateToProps)(Map)
