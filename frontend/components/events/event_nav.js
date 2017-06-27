import React, { Component } from 'react'
import { Link } from 'react-router'

export default function EventNav({ event }) {
  const url = `/events/${event.id}/`
  return (
    <nav className="sub-nav">
      <ul>
        <li>
          <Link to={ url }>Posts</Link>
        </li>
        <li>
          <Link to={ url + "attendees" }>Attendees</Link>
        </li>
      </ul>
    </nav>
  )
}
