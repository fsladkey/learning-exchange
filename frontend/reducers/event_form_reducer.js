import moment from 'moment'
import { fromJS } from 'immutable'
import { SET_FORM_FIELD } from '../actions/form_actions'

const initialState = fromJS({
  start_time: moment().toISOString(),
  end_time: moment().toISOString(),
  name: "",
  description: "",
  group_id: 0,
  id: null
})

export default function eventFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_FIELD:
      if (action.field == "start_time" || action.field == "end_time") {
        const time = moment(action.value)
        const rounded = Math.round(time.minute() / 15) * 15;
        time.minute(rounded)
        action.value = time.toISOString();
      }
      return action.form == "event" ? state.set(action.field, action.value) : state;
    default:
      return state
  }
}
