import { Map } from 'immutable'
import {
  RECEIVE_GENERIC_RESOURCES,
  REMOVE_GENERIC_RESOURCE
} from '../actions/generic_actions'

const defaultReducer = (state, action) => state

const genericReducer = (type, reducer = defaultReducer) => (state = Map({}), action) => {
  switch (action.type) {
    case RECEIVE_GENERIC_RESOURCES:
      if (action.resourceType === type) {
        const newItems = Map(action.resources)
        return state.merge(newItems)
      }
    case REMOVE_GENERIC_RESOURCE:
      if (action.resourceType === type) {
        return state.delete(action.id)
      }
    default:
      return reducer(state, action)
  }
}

export default genericReducer
