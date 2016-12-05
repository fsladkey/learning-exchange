import { SET_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions'
export default function dropdownReducer(state = null, action) {
  switch (action.type) {
    case SET_DROPDOWN:
      return action.dropdown
    default:
      return state
  }
}
