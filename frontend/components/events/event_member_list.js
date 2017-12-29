import React, { Component } from "react"
import Member from "../shared/member"

function EventMember({ member }) {
  return <Member type="event" member={member} />
}

export default function EventMemberList({ members }) {
  const memberElements = members.map(member =>
    <EventMember key={member.id} member={member} />
  )
  return (
    <ul className="member-list">
      { memberElements }
    </ul>
  )
}