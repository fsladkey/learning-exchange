import React from 'react'
import { connect } from "react-redux"

export function EventMembers({ event }) {
  return (
    <section>
      <h1>Event Members</h1>
      <MemberList members={event.attending_users} />
    </section>
  )
}

const mapStateToProps = ({ events }, { params }) => ({
  event: events.get(params.id)
})

export default connect(mapStateToProps)(EventMembers);