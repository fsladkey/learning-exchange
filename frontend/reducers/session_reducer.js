import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
export default function sessionReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser
    default:
      return state
  }
}
