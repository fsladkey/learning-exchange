import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router'
import GroupMemberList from "./group_member_list"
import { activeMembers, inactiveMembers } from "../../reducers/selectors"

function NewMemberLink({ currentUser, groupId }) {
  if (!currentUser.admin) {
    return null
  } 
  return (
    <Link className="new-member-link" to={`/groups/${groupId}/members/new`}>
      <i className="fa fa-plus"/> Add a new member
    </Link>
  )
}

function ActiveMembers({ groupId, members, currentUser }) {
  return (
    <div>
      <h1>{ currentUser.admin ? "Active Members" : "Group Members" }</h1>
      <NewMemberLink currentUser={currentUser} groupId={groupId} />
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
      <ActiveMembers currentUser={currentUser} members={activeMembers} groupId={groupId} />
      <InactiveMembers currentUser={currentUser} members={inactiveMembers} groupId={groupId}/>
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