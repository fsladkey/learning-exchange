import React, { Component } from 'react'

export default class Map extends Component {

  constructor(props) {
    super(props)
    this.state = { className: "" }
  }

  componentDidMount() {
    const center = { lat: 40.6681, lng: -73.9806 }
    this.map = new google.maps.Map(this.map, { zoom: 14, center })
    setTimeout(() => {
      this.setState({ className: "active" })
    }, 1000)
  }

  render() {
    return (
      <div
        id="map"
        className={ this.state.className }
        ref={ map => this.map = map }
        />
    )
  }
}
