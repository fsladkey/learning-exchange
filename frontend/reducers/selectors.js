import { createSelector } from 'reselect'
import { Map, List } from 'immutable'

const createdAtAsc = (a, b) => new Date(a.created_at) - new Date(b.created_at)
const createdAtDesc = (b, a) => new Date(a.created_at) - new Date(b.created_at)

export const allResults = ({ searchResults }) => {
  return searchResults.reduce((all, results) => all.concat(results))
}

export const conversations = ({ conversations }) => {
  return conversations.sort(createdAtDesc)
}

export const getCurrentUser = ({ currentUser, users }) => {
  return users.get(currentUser.id.toString())
}

export const currentConversation = ({ conversations }, username) => {
  return conversations.filter(convo =>
    convo.other_user.username === username
  ).values().next().value
}

export const currentProfile = ({ users }, username) => {
  return users.filter(user =>
    user.username === username
  ).values().next().value
}

export const numUnseenMessages = ({ direct_messages, currentUser }) => {
  return direct_messages.reduce((sum, dm) => {
    return sum + (!dm.seen && dm.receiver_id === currentUser.id ? 1 : 0)
  }, 0)
}

export const commentsByType = type => ({ comments }, userId) => {
  return comments.filter(comment =>
    comment.commentable_id === parseInt(userId) &&
    comment.commentable_type === type
  ).sort(createdAtDesc)
}

const messagesByType = type => ({ chat_messages }, groupId) => {
  return chat_messages.filter(message =>
    message.chattable_id === parseInt(groupId) &&
    message.chattable_type === type
  ).sort(createdAtAsc)
}


export const attendanceByEventId = ({ attendances }, eventId) => {
  return attendances.find(attendance =>
    attendance.event_id === eventId
  )
}

export const eventsByUserId = ({ currentUser, events, attendances }, userId) => {
  return attendances
    .filter(attendance => attendance.user_id == userId)
    .map(attendance => events.get(attendance.event_id.toString()))
    .filter(event => new Date(event.end_time) >= new Date())
}

const membersByStatus = ({ groups, memberships }, groupId, active) => {
  return groups.get(groupId)
    .members
    .filter(member =>
      memberships.find(membership =>
        membership.member_id == member.id).active == active
    )
}

export const activeMembers = (state, groupId) => {
  return membersByStatus(state, groupId, true)
}

export const inactiveMembers = (state, groupId) => {
  return membersByStatus(state, groupId, false)
}

export const attendees = (state, eventId) => {
  const event = state.events.get(eventId)
  return event.attendances.map(attendanceId => {
    const attendance = state.attendances.get(attendanceId.toString())
    return attendance.user
  })
}

export const userComments = commentsByType('User')
export const groupMessages = messagesByType('Group')
export const eventMessages = messagesByType('Event')

export const membership = ({ memberships, currentUser }, groupId) => {
  return memberships.find(membership => {
    return membership.group_id === groupId && membership.member_id === currentUser.id
  })
};