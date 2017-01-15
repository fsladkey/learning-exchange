import { schema } from 'normalizr';

const group = new schema.Entity('groups')
const event = new schema.Entity('events')
const comment = new schema.Entity('comments')
const user = new schema.Entity('users', { comments: [ comment ] })
const direct_message = new schema.Entity('direct_messages')

export default {
  group,
  event,
  comment,
  user,
  direct_message
}
