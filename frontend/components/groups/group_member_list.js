import React, { Component } from "react"
import Member from "../shared/member"
import ActivationButton from "./activation_button"

function GroupMember({ groupId, member, active }) {
  return (
    <Member type="group" member={member} >
      <ActivationButton groupId={groupId} member={member} active={active} />
    </Member>
  )
}

export default function GroupMemberList({ groupId, members, active }) {
  const memberElements = members.map(member =>
    <GroupMember key={member.id} member={member} active={active} />
  )
  return (
    <ul className="member-list">
      { memberElements }
    </ul>
  )
}