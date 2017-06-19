import React from 'react'
import { Link } from 'react-router'

export default function ProfileSidebar({ user }) {
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
          user.events.map(event =>
            <li key={event.id}>
              <Link to={ `/event/${event.id}` }>
                { event.name }
              </Link>
            </li>
          )
        }
      </ul>
    </section>
  )
}
