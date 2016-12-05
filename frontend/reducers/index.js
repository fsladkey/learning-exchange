import { combineReducers } from 'redux'
import genericReducer from './generic_reducer'
import currentUser from './session_reducer'
import dropdown from './dropdown_reducer'

const reducers = { currentUser, dropdown }

;[
  'groups',
  'events',
  'users',
  'directMessages',
  'chatMessages',
  'notifications'
].forEach(type => reducers[type] = genericReducer(type.slice(0, -1)))

export default combineReducers(reducers)
