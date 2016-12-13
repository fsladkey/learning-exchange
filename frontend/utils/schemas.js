import { Schema, arrayOf } from 'normalizr';
const group = new Schema('groups', { idAttribute: 'id' })
const event = new Schema('events', { idAttribute: 'id' })
const user = new Schema('users', { idAttribute: 'id' })
const schemas = { group, event, user }

export default schemas
