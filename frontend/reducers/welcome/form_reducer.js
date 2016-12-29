import { fromJS } from 'immutable'
import { SET_FORM_FIELD } from '../../actions/form_actions'
const initialState = fromJS({
  username: "",
  password: "",
  confirm_password: "",
  firstname: "",
  lastname: "",
  zipcode: ""
})

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_FIELD:
      return state.set(action.field. action.value)
    default:
      return state
  }
}
