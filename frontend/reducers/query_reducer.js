import { fromJS } from 'immutable'
import { RECEIVE_QUERY } from '../actions/search_actions'

export default function searchResultsReducer(state = '', action) {
  switch (action.type) {
    case RECEIVE_QUERY:
      return action.query
    default:
      return state
  }
}
