import { fromJS } from 'immutable'
import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions'
const initialState = fromJS({
  events: [],
  groups: [],
  users: []
})

export default function searchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
    console.log(action.results);
      return fromJS(action.results)
    case CLEAR_SEARCH_RESULTS:
      return initialState
    default:
      return state
  }
}
