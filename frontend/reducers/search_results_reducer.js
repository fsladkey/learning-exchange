import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions'
const initialState = {
  events: [],
  groups: [],
  users: []
}
export default function searchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.results
    case CLEAR_SEARCH_RESULTS:
      return initialState
    default:
      return state
  }
}
