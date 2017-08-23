import { fromJS } from 'immutable'
import { SET_FORM_FIELD } from '../actions/form_actions'

const initialState = fromJS({
    id: null,
    email: "",
    password: "",
    password_confirmation: "",
    username: "",
    firstname: "",
    lastname: "",
    middlename: "",
    lastname: "",
    zipcode:  "",
})

export default function eventFormReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FORM_FIELD:
            return action.form == "user" ? state.set(action.field, action.value) : state;
        default:
            return state
    }
}
