import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setFormField } from '../../actions/form_actions'
import { createEventFromStore } from '../../actions/event_actions'
import { preventDefault } from '../../utils/misc'
import { setModal } from '../../actions/modal_actions'
import PlacesAutocompleteInput from '../shared/places_autocomplete_input'

class EventForm extends React.Component {
  handleChange = (name) => (e) => {
    this.props.setFormField("event", name, e.currentTarget.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createEvent().then((event) => {
      this.props.setModal(null)
      this.props.router.push(`/events/${event.id}`)
    })
  }

  render() {
    const { eventForm, setFormField, createEvent } = this.props;

    const start = moment(eventForm.get("start")).calendar()
    const end = moment(eventForm.get("end")).calendar()
    return (
      <section className="event-form">
        <h2>Create an Event</h2>
        <p>{start} - {end}</p>
        <form onSubmit={ preventDefault }>
          <label htmlFor="event-name">Name</label>
          <input id="event-name" onChange={ this.handleChange("name") } value={this.props.eventForm.get("name")}/>
          <label htmlFor="event-description">Description</label>
          <textarea id="event-description" onChange={ this.handleChange("description") } value={this.props.eventForm.get("description")} />
          <label htmlFor="event-address">Address</label>
          <PlacesAutocompleteInput id="event-address" onChange={ this.handleChange("address") } />
          <button type="button" onClick={ this.handleSubmit } >Create Event</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = ({ eventForm }) => ({ eventForm });

export default withRouter(connect(
  mapStateToProps, 
  { setFormField, setModal, createEvent: createEventFromStore }
)(EventForm))
