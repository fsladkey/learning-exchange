import { fromJS } from 'immutable'
import { SET_FORM_FIELD } from '../actions/form_actions'

const initialState = fromJS({
  start: "",
  end: "",
  name: "",
  description: "",
  address: "",
  group_id: 0
})

export default function eventFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_FIELD:
      return action.form == "event" ? state.set(action.field, action.value) : state;
    default:
      return state
  }
}
