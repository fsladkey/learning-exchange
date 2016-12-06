import { combineReducers } from 'redux'
import genericReducer from './generic_reducer'
import currentUser from './session_reducer'
import dropdown from './dropdown_reducer'
import mapFocus from './map_focus_reducer'

const reducers = { currentUser, dropdown, mapFocus }

;[
  'groups',
  'events',
  'users',
  'directMessages',
  'chatMessages',
  'notifications'
].forEach(type => reducers[type] = genericReducer(type.slice(0, -1)))

export default combineReducers(reducers)
