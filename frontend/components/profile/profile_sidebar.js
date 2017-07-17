import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { eventsByUserId} from '../../reducers/selectors'

export function ProfileSidebar({ user, events }) {
  return (
    <section className="profile-sidebar">
      <h4>Groups</h4>
      <ul>
        {
          user.groups.map(group =>
            <li key={group.id}>
              <Link to={ `/groups/${group.id}` }>
                { group.name }
              </Link>
            </li>
          )
        }
      </ul>
      <h4>Events</h4>
      <ul>
        {
          events.valueSeq().map(event =>
            <li key={event.id}>
              <Link to={ `/events/${event.id}` }>
                { event.name }
              </Link>
            </li>
          )
        }
      </ul>
    </section>
  )
}

function mapStateToProps(state, { user }) {
  return { events: eventsByUserId(state, user.id) }
}

export default connect(mapStateToProps)(ProfileSidebar) 