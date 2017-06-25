import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_GENERIC_RESOURCES } from '../actions/generic_actions'

export default function sessionReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser
    // case RECEIVE_GENERIC_RESOURCES:
    //   if (action.resourceType == "notifications" && state) {
    //     let notifications = state.notifications
    //     const id = Object.keys(action.resources)[0]
    //     notifications = state.notifications.map(notification =>
    //       notification.id == parseInt(id) ?
    //       action.resources[id] :
    //       notification
    //     )
    //     return Object.assign(state, { notifications })
    //   }
    default:
      return state
  }
}
