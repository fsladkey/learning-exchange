import { fromJS } from 'immutable'
import { RECEIVE_SIGN_UP_ERRORS } from '../../actions/error_actions'
const initialState = fromJS({
  username: [],
  password: [],
  confirm_password: [],
  firstname: [],
  lastname: [],
  zipcode: []
})

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SIGN_UP_ERRORS:
      return state.merge(action.errors)
    default:
      return state
  }
}
