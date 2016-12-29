import { fromJS } from 'immutable'
import { RECEIVE_SIGN_IN_ERRORS } from '../../actions/form_actions'
const initialState = fromJS({
  username: [],
  password: []
})

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SIGN_IN_ERRORS:
      return state.merge(action.errors)
    default:
      return state
  }
}
