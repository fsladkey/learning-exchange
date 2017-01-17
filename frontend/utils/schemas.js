import { schema } from 'normalizr';

const group = new schema.Entity('groups')
const event = new schema.Entity('events')
const comment = new schema.Entity('comments')
const direct_message = new schema.Entity('direct_messages')
const user = new schema.Entity('users', { comments: [ comment ], unseen_messages: [ direct_message ] })
const conversation = new schema.Entity('conversations', { messages: [ direct_message ] })
const chat_message = new schema.Entity('chat_messages')
const notifications = new schema.Entity('notifications')

export default {
  group,
  event,
  comment,
  direct_message,
  user,
  conversation,
  chat_message,
  notifications
}
