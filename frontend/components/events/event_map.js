import React, { Component } from 'react'
import { connect } from 'react-redux'

class Map extends Component {

  setMarker() {
    const { lat, lng } = this.props.event;
    const marker = new google.maps.Marker({
      position: latLng,
      map: component.map
    });
    this.markers.push(marker)
  }

  componentDidMount() {
    component.markers = []
    this.map = new google.maps.Map(this.mapNode, { zoom: 11, center })
  }

  componentWillReceiveProps(nextProps) {
    // reset marker
  }

  render() {
    return (
      <div id="map" className={ className } ref={ map => this.mapNode = map }/>
    )
  }
}

export default connect(mapStateToProps)(Map)
