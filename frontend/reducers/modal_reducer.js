import { SET_MODAL } from '../actions/modal_actions'
export default function modalReducer(state = null, action) {
  switch (action.type) {
    case SET_MODAL:
      return action.modal
    default:
      return state
  }
}
