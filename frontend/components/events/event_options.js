import React, { Component } from "react";
import { connect } from "react-redux"
import EventActions from '../../actions/event_actions'
import { setDropdown } from '../../actions/dropdown_actions'
import { setModal } from '../../actions/modal_actions'
import { setFormField } from '../../actions/form_actions'
import { withRouter } from 'react-router'
import { EventOptionsDropdown } from './event_options_dropdown'

export class EventOptions extends Component {
  
  constructor(props) {
    super(props)
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  dropDown() {
    if (this.props.showDropdown) {
      return <EventOptionsDropdown cancelEvent={ this.cancelEvent } updateEvent={this.updateEvent}/>
    }
  }

  cancelEvent = () => {
    this.props.setFormField("event", "id", this.props.event.id)
    this.props.setModal("confirmDeleteEvent");
  }

  updateEvent = () => {
    ;["id", "group_id", "name", "start_time", "end_time", "description", "address"].forEach(field => 
      this.props.setFormField("event", field, this.props.event[field])
    )
    this.props.setModal("eventForm")
  }

  toggleDropdown(e) {
    e.stopPropagation()
    this.props.showDropdown ?
      this.props.setDropdown(null) :
      this.props.setDropdown('event-settings')
  }

  render() {
    const { currentUser, event } = this.props;
    if (currentUser.id !== event.creator_id) return null
    const className = this.props.showDown ? " active" : "";
    return (
        <span className={`event-options${className}`} onClick={this.toggleDropdown}>
          <i className="fa fa-gear spin-on-hover" />
          { this.dropDown() }
        </span>
    )
  }
}

function mapStateToProps({ dropdown, currentUser }) {
  return { showDropdown: dropdown === 'event-settings', currentUser }
}

const actions = { 
  destroyEvent: EventActions.destroyEvent,
  setDropdown,
  setModal,
  setFormField
}

export default withRouter(connect(mapStateToProps, actions)(EventOptions))