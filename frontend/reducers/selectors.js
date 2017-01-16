import { createSelector } from 'reselect'
import { Map, List } from 'immutable'

const createdAtAsc = (a, b) => new Date(a.created_at) - new Date(b.created_at)
const createdAtDesc = (b, a) => new Date(a.created_at) - new Date(b.created_at)

export const allResults = ({ searchResults }) => {
  return searchResults.reduce((all, results) => all.concat(results))
}

export const conversations = ({ direct_messages, currentUser }) => {
  // TODO: Use reduce
  let convos = Map({})
  direct_messages.forEach(dm => {
    let convo = convos.get(JSON.stringify(dm.other_user))
    if (!convo) convo = List([])
    convos = convos.set(JSON.stringify(dm.other_user), convo.push(dm))
  })
  return convos
}

export const currentConversation = ({ direct_messages }, username) => {
  const result = {
    messages: [],
    other_user: null
  }

  direct_messages.forEach(dm => {
    if (dm.other_user.username === username) {
      result.other_user = dm.other_user
      result.messages.push(dm)
    }
  })
  result.messages = result.messages.sort((a, b) => createdAtAsc)
  return result
}

export const userComments = ({ comments }, userId) => {
  return comments.filter(comment =>
    comment.commentable_id === parseInt(userId) &&
    comment.commentable_type === 'User'
  ).sort(createdAtDesc)
}

export const groupMessages = ({ chat_messages }, groupId) => {
  return chat_messages.filter(message =>
    message.chattable_id === parseInt(groupId) &&
    message.chattable_type === 'Group'
  ).sort(createdAtAsc)
}
