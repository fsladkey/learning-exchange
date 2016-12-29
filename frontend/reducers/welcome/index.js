import { combineReducers } from 'redux'
import signUpFormErrors from './sign_up_form_errors_reducer'
import signInFormErrors from './sign_in_form_errors_reducer'
import form from './form_reducer'

export default combineReducers({
  signUpFormErrors,
  signInFormErrors,
  form
})
