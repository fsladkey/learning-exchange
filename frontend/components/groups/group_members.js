import React from 'react'
import { connect } from "react-redux"
import MemberList from "../shared/member_list"

export function GroupMembers({ group }) {
  return (
    <section>
      <h1>Group Members</h1>
      <MemberList members={group.members} />
    </section>
  )
}

const mapStateToProps = ({ groups }, { params }) => ({
  group: groups.get(params.id)
})

export default connect(mapStateToProps)(GroupMembers);