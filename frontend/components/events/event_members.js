import React from 'react'
import { connect } from "react-redux"
import EventMemberList from "./event_member_list"
import { attendees } from "../../reducers/selectors"

export function EventMembers({ attendees }) {
  return (
    <section className="event-members">
      <h1>Event Attendees</h1>
      <EventMemberList members={attendees} />
    </section>
  )
}

const mapStateToProps = (state, { params }) => ({
  attendees: attendees(state, params.id)
})

export default connect(mapStateToProps)(EventMembers)
