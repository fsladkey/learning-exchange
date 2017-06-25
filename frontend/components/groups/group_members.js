import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router"
import UserPhoto from "../shared/user_photo"

function GroupMember({ member }) {
  return (
    <li className="group-member">
      <Link to={`profile/${member.username}`}>
        <UserPhoto user={ member } className="thumb" />
        <h4>{ member.fullname }</h4>
      </Link>
    </li>
  )
}

export function GroupMembers({ group }) {
  return (
    <section>
      <h1>Group Members</h1>
      <ul className="group-member-list">
        { group.members.map(member => <GroupMember member={member} />) }
      </ul>
    </section>
  )
}

const mapStateToProps = ({ groups }, { params }) => ({
  group: groups.get(params.id)
})

export default connect(mapStateToProps)(GroupMembers);