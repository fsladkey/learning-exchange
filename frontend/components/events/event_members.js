import React from 'react'
import { connect } from "react-redux"
import EventMemberList from "./event_member_list"

export function EventMembers({ event }) {
  return (
    <section className="event-members">
      <h1>Event Attendees</h1>
      <EventMemberList members={event.attending_users} />
    </section>
  )
}

const mapStateToProps = ({ events }, { params }) => ({
  event: events.get(params.id)
})

export default connect(mapStateToProps)(EventMembers)