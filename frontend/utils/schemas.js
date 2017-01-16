import { schema } from 'normalizr';

const group = new schema.Entity('groups')
const event = new schema.Entity('events')
const comment = new schema.Entity('comments')
const user = new schema.Entity('users', { comments: [ comment ] })
const direct_message = new schema.Entity('direct_messages')
const chat_message = new schema.Entity('chat_messages')

export default {
  group,
  event,
  comment,
  user,
  direct_message,
  chat_message,
}
