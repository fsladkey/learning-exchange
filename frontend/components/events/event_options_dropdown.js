import * as React from "react"

export function EventOptionsDropdown({ cancelEvent, updateEvent, open }) {
  return (
    <ul className="event-options-dropdown">
      <li>
        <button className="dropdown-option" onClick={cancelEvent}>Cancel Event</button>
      </li>
      <li>
        <button className="dropdown-option" onClick={updateEvent}>Edit Event</button>
      </li>
    </ul>
  )
}