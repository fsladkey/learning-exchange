import React from 'react'
import { connect } from "react-redux"
import GroupMemberList from "./group_member_list"
import { activeMembers, inactiveMembers } from "../../reducers/selectors"

function ActiveMembers({ groupId, members, currentUser }) {
  return (
    <div>
      <h1>{currentUser.admin ? "Active Members" : "Group Members"}</h1>
      <GroupMemberList groupId={groupId} members={members} active={true} />
    </div>
  )
}

function InactiveMembers({ groupId, members, currentUser }) {
  if (!currentUser.admin) return null;
  return (
    <div>
      <h1>Inactive Members</h1>
      <GroupMemberList groupId={groupId} members={members} active={false} />
    </div>
  )
}

export function GroupMembers({ groupId, currentUser, activeMembers, inactiveMembers }) {
  return (
    <section>
      <ActiveMembers currentUser={currentUser} members={activeMembers} />
      <InactiveMembers currentUser={currentUser} members={inactiveMembers} />
    </section>
  )
}

const mapStateToProps = (state, { params }) => ({
  groupId: parseInt(params.id),
  activeMembers: activeMembers(state, params.id),
  inactiveMembers: inactiveMembers(state, params.id),
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(GroupMembers);