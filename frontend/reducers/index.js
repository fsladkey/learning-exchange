import { combineReducers } from 'redux'
import genericReducer from './generic_reducer'
import currentUser from './session_reducer'
import dropdown from './dropdown_reducer'
import mapFocus from './map_focus_reducer'
import searchResults from './search_results_reducer'
import query from './query_reducer'
import { routerReducer } from 'react-router-redux'

const reducers = {
  currentUser,
  dropdown,
  mapFocus,
  searchResults,
  query,
  routing: routerReducer
}

;[
  'groups',
  'events',
  'users',
  'direct_messages',
  'chat_messages',
  'notifications',
  'comments'
].forEach(type => reducers[type] = genericReducer(type))

export default combineReducers(reducers)
