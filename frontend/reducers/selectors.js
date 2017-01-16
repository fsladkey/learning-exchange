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

export const currentConversation = ({ conversations }, username) => {
  return conversations.filter(convo =>
    convo.other_user.username === username
  ).values().next().value
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

export const userComments = commentsByType('User')
export const groupMessages = messagesByType('Group')
export const eventMessages = messagesByType('Event')
