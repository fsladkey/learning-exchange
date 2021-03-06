import { schema } from 'normalizr';

const comment = new schema.Entity('comments')
const direct_message = new schema.Entity('direct_messages')
const chat_message = new schema.Entity('chat_messages')
const notification = new schema.Entity('notifications')
const attendance = new schema.Entity('attendances')
const membership = new schema.Entity('memberships')
const group = new schema.Entity('groups', {
  memberships: [ membership ]
})
const event = new schema.Entity('events', {
  attendances: [ attendance ]
})
const conversation = new schema.Entity('conversations', { 
  messages: [ direct_message ]
})
const user = new schema.Entity('users', {
  events: [ event ],
  groups: [ group ],
  comments: [ comment ], 
  attendances: [ attendance ], 
  unseen_messages: [ direct_message ],
  notifications: [ notification ]
})

export default {
  group,
  event,
  comment,
  direct_message,
  user,
  conversation,
  chat_message,
  notification,
  attendance,
  membership
}