import { search } from '../utils/api_util'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'
export const RECEIVE_QUERY = 'RECEIVE_QUERY'

export function fetchSearchResults(opts = {}) {
  return dispatch => {
    return search(opts).then(
      results => dispatch(receiveSearchResults(results))
    )
  }
}

export function receiveSearchResults(results) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  }
}

export function setQuery(query) {
  return dispatch => {
    dispatch(receiveQuery(query))
    query ?
      dispatch(fetchSearchResults({ query })) :
      dispatch(clearSearchResults())
  }
}

export function receiveQuery(query) {
  return {
    type: RECEIVE_QUERY,
    query
  }
}

export function clearSearchResults() {
  return { type: CLEAR_SEARCH_RESULTS }
}
