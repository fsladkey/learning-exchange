import React, { Component } from 'react'
import { Link } from 'react-router'

export default function GroupNav({ group }) {
  const url = `/groups/${group.id}/`
  return (
    <nav className="sub-nav">
      <ul>
        <li>
          <Link to={ url }>Chat</Link>
        </li>
        <li>
          <Link to={ url + "events" }>Events</Link>
        </li>
        <li>
          <Link to={ url + "members" }>Members</Link>
        </li>
      </ul>
    </nav>
  )
}
