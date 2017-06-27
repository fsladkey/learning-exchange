import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_GENERIC_RESOURCES } from '../actions/generic_actions'

export default function sessionReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser
    case RECEIVE_GENERIC_RESOURCES:
      const user =  Object.values(action.resources)[0]
      if (state && action.resourceType == "users" && user.id === state.id) {
        return user
      }
    default:
      return state
  }
}
