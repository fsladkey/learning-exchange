import React, { Component } from 'react'

const MARKER_URL = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'

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
    this.updateMarkers(this.props.items)
  }

  componentWillReceiveProps(nextProps) {
    this.updateMarkers(nextProps.items)
  }

  setMap = (map) => {
    this.mapNode = map
  }

  updateMarkers(items) {
    this.markers.forEach(marker => marker.setMap(null))
    this.markers = []
    items.forEach(object => {
      const latLng = { lat: object.lat, lng: object.lng };
      if (latLng.lat && latLng.lng) {
        const marker = new google.maps.Marker({
          position: latLng,
          title: object.title,
          map: this.map
        });
        this.markers.push(marker)
      }
    })
    this.cluster && this.cluster.clearMarkers();
    this.cluster = new MarkerClusterer(
      this.map,
      this.markers,
      { imagePath: MARKER_URL }
    );
  }


  render() {
    return (
      <div id="map" className={ this.props.className } ref={ this.setMap }/>
    )
  }
}
