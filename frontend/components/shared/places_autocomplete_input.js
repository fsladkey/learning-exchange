import React, { Component } from "react"

const PLACES_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json"

export default class PlacesAutocompleteInput extends Component {

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.input)
    this.autocomplete.addListener('place_changed', () => {
      this.props.onChange({ currentTarget: { value: this.input.value } })
    })
  }

  render() {
    return <input id={this.props.id} ref={ input => this.input = input } onChange={this.props.onChange} value={this.props.value}/>
  }
}
