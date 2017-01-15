import React, { Component } from 'react'
import updateMarkers from '../../utils/update_markers'

export default class Map extends Component {

  componentDidMount() {
    const { lat, lng } = this.props.center
    this.markers = []
    this.map = new google.maps.Map(
      this.mapNode,
      {
        zoom: this.props.zoom || 11,
        center: { lat, lng }
      }
    )
    updateMarkers(this, this.props.items)
  }

  componentWillReceiveProps(nextProps) {
    updateMarkers(this, nextProps.items)
  }

  setMap = (map) => {
    this.mapNode = map
  }


  render() {
    return (
      <div id="map" className={ this.props.className } ref={ this.setMap }/>
    )
  }
}
