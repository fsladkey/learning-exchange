import { combineReducers } from 'redux'
import genericReducer from './generic_reducer'
import currentUser from './session_reducer'
import dropdown from './dropdown_reducer'
import mapFocus from './map_focus_reducer'
import searchResults from './search_results_reducer'
import query from './query_reducer'
import modal from './modal_reducer'
import eventForm from './event_form_reducer'
import userForm from './user_form_reducer'
import attendanceReducer from './attendance_reducer'
import { routerReducer as routing } from 'react-router-redux'

const reducers = {
  currentUser,
  dropdown,
  mapFocus,
  modal,
  query,
  routing,
  searchResults,
  eventForm,
  userForm
}

;[
  'groups',
  'events',
  'users',
  'conversations',
  'chat_messages',
  'direct_messages',
  'notifications',
  'comments',
  'memberships'
].forEach(type => reducers[type] = genericReducer(type))

reducers.attendances = genericReducer('attendances', attendanceReducer)

export default combineReducers(reducers)
