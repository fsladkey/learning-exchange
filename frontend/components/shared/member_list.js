import React from "react"
import { Link } from "react-router"
import UserPhoto from "../shared/user_photo"

function GroupMember({ member }) {
  return (
    <li className="member">
      <Link to={`profile/${member.username}`}>
        <UserPhoto user={ member } className="thumb" />
        <h4>{ member.fullname }</h4>
      </Link>
    </li>
  )
}

export default function MemberList({ members }) {
    return (
      <ul className="member-list">
        { members.map(member => <GroupMember key={member.id} member={member} />) }
      </ul>
    )
}