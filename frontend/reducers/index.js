import { combineReducers } from 'redux'
import genericReducer from './generic_reducer'
import currentUser from './session_reducer'
import dropdown from './dropdown_reducer'
import mapFocus from './map_focus_reducer'
import searchResults from './search_results_reducer'

const reducers = { currentUser, dropdown, mapFocus, searchResults }

;[
  'groups',
  'events',
  'users',
  'directMessages',
  'chatMessages',
  'notifications'
].forEach(type => reducers[type] = genericReducer(type))

export default combineReducers(reducers)
