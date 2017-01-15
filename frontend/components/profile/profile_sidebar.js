import React from 'react'
import { Link } from 'react-router'

export default function ProfileComments({ user }) {
  return (
    <section className="profile-sidebar">
      <h4>Groups</h4>
      <ul>
        {
          user.groups.map(group =>
            <li>
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
          user.events.map(events =>
            <li>
              <Link to={ `/events/${events.id}` }>
                { events.name }
              </Link>
            </li>
          )
        }
      </ul>
    </section>
  )
}
