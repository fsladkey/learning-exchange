import { Map } from 'immutable'
import { REMOVE_GENERIC_RESOURCE } from '../actions/generic_actions'

export default function attendanceReducer(state = Map({}), action) {
  switch (action.type) {
    case REMOVE_GENERIC_RESOURCE:
      if (action.resourceType == "events") {
          return state.filter(attendance => attendance.event_id !== parseInt(action.id))
      }
    default:
      return state
  }
}
