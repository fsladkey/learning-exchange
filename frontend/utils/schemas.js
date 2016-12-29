import { Schema, arrayOf } from 'normalizr';
const group = new Schema('groups', { idAttribute: 'id' })
const event = new Schema('events', { idAttribute: 'id' })
const user = new Schema('users', { idAttribute: 'id' })
const direct_message = new Schema('direct_messages', { idAttribute: 'id' })
const schemas = { group, event, user, direct_message }

export default schemas
