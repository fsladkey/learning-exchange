import { schema } from 'normalizr';

const group = new schema.Entity('groups')
const event = new schema.Entity('events')
const comment = new schema.Entity('comments')
const user = new schema.Entity('users', { comments: [ comment ] })
const conversation = new schema.Entity('conversations')
const chat_message = new schema.Entity('chat_messages')
const notifications = new schema.Entity('notifications')

export default {
  group,
  event,
  comment,
  user,
  conversation,
  chat_message,
  notifications
}
