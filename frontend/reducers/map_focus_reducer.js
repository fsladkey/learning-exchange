import { SET_MAP_FOCUS } from '../actions/map_focus_actions'
export default function dropdownReducer(state = false, action) {
  switch (action.type) {
    case SET_MAP_FOCUS:
      return action.value
    default:
      return state
  }
}
