import React from 'react'
import Select from 'react-select';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setFormField } from '../../actions/form_actions'
import { createEventFromStore, updateEventFromStore } from '../../actions/event_actions'
import { preventDefault } from '../../utils/misc'
import { setModal } from '../../actions/modal_actions'
import PlacesAutocompleteInput from '../shared/places_autocomplete_input'

const hourOptions = []
const minuteOptions = []

Array(12).fill(null).forEach((_, idx) => {
  const value = (idx + 1) < 10 ? `0${idx + 1}` : `${idx + 1}`
  hourOptions.push({ value, label: value })
})

;["00", "15", "30", "45"].forEach((value) => {
  minuteOptions.push({ value , label: value })
})


function TimeInput({ time, type, setHours, setMinutes }) {
  console.log(time.format("hh"), time.format("mm"))
  // ADD AM/PM
  return (
    <div className="time-input">
      <Select
        value={time.format("hh")}
        options={hourOptions}
        clearable={false}
        searchable={true}
        onChange={setHours(type)}
      />
      <span className="hour-min-space">:</span>
      <Select
        value={time.format("mm")}
        options={minuteOptions}
        clearable={false}
        searchable={true}
        onChange={setMinutes(type)}
      />
    </div>
  )
}



class EventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { startFocused: false, endFocused: false }
  }
  clearForm() {
    ["name", "description", "address"].forEach((field) => {
      this.props.setFormField("event", field, "")
    })
  }

  handleChange = (name) => (e) => {
    this.props.setFormField("event", name, e.currentTarget.value)
  }

  setDate = (name) => (date) => {
    const current = moment(this.props.eventForm.get(name))
    current.year(date.year());
    current.month(date.month());
    current.date(date.date());
    this.props.setFormField("event", name, current.toISOString())
  }

  setHours = (name) => ({ value }) => {
    const current = moment(this.props.eventForm.get(name))
    current.hours(value);
    this.props.setFormField("event", name, current.toISOString())
  }

  setMinutes = (name) => ({ value }) => {
    const current = moment(this.props.eventForm.get(name))
    current.minutes(value);
    this.props.setFormField("event", name, current.toISOString())
  }

  handleFocus = (name) => ({ focused }) => {
    this.setState({ [name]: focused })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.submitForm().then((event) => {
      this.props.setModal(null)
      this.clearForm()
      this.props.router.push(`/events/${event.id}`)
    })
  }

  submitForm() {
    return this.props.eventForm.get("id") ? this.props.updateEvent() : this.props.createEvent();
  }

  render() {
    const { eventForm, setFormField, createEvent } = this.props;
    const titleText = this.props.eventForm.get("id") ? "Edit Event" : "Create Event";
    const submitText = this.props.eventForm.get("id") ? "Update Event" : "Create Event";
    const start = moment(eventForm.get("start_time")).format("ddd MMM YY");
    const starttime = moment(eventForm.get("start_time")).format("h:mm a");
    const end = moment(eventForm.get("end_time")).format("ddd MMM YY");
    const endtime = moment(eventForm.get("end_time")).format("h:mm a");
  
    return (
      <section className="event-form">
        <h2><span>{titleText}</span><i className="fa fa-calendar-check-o"/></h2>
        <div className="time-range">
          <label>
            Start
          </label>
          <div className="date-time">
            <SingleDatePicker
              date={moment(eventForm.get("start_time"))}
              onDateChange={this.setDate("start_time")}
              focused={this.state.startFocused}
              onFocusChange={this.handleFocus("startFocused")}
            />
            <TimeInput 
              time={moment(eventForm.get("start_time"))}
              type={"start_time"}
              setHours={this.setHours}
              setMinutes={this.setMinutes}
            />
          </div>
          <label>
            End
          </label>
          <div className="date-time">
            <SingleDatePicker
              date={moment(eventForm.get("end_time"))}
              onDateChange={this.setDate("end_time")}
              focused={this.state.endFocused}
              onFocusChange={this.handleFocus("endFocused")}
            />
            <TimeInput 
              time={moment(eventForm.get("end_time"))}
              type={"end_time"}
              setHours={this.setHours}
              setMinutes={this.setMinutes}
            />
          </div>
        </div>
        <form onSubmit={ preventDefault }>
          <label htmlFor="event-name">Name</label>
          <input id="event-name" onChange={ this.handleChange("name") } value={this.props.eventForm.get("name")}/>
          <label htmlFor="event-description">Description</label>
          <textarea id="event-description" onChange={ this.handleChange("description") } value={this.props.eventForm.get("description")} />
          <label htmlFor="event-address">Address</label>
          <PlacesAutocompleteInput id="event-address" onChange={ this.handleChange("address") } value={this.props.eventForm.get("address")}/>
          <button className="lx-button" type="button" onClick={ this.handleSubmit } >{submitText}</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = ({ eventForm }) => ({ eventForm });

export default withRouter(connect(
  mapStateToProps, 
  { setFormField, setModal, createEvent: createEventFromStore, updateEvent: updateEventFromStore }
)(EventForm))
