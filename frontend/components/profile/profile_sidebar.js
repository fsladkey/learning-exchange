import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { eventsByUserId} from '../../reducers/selectors'

export function ProfileSidebar({ events, groups }) {
  return (
    <section className="profile-sidebar">
      <h4>Groups</h4>
      <ul>
        {
          groups.map(group =>
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
  return { 
    events: eventsByUserId(state, user.id),
    groups: user.groups.map(id => state.groups.get(id.toString()))
  }
}

export default connect(mapStateToProps)(ProfileSidebar) 