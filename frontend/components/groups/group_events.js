import React from 'react'
import EventCalendar from './event_calendar'

export default function GroupEvents({ params }) {
  return (
    <section>
      <h1>Group Events</h1>
      <EventCalendar params={params}/>
    </section>
  )
}
