export const RECEIVE_SIGN_UP_ERRORS = "RECEIVE_SIGN_UP_ERRORS"
export const RECEIVE_SIGN_IN_ERRORS = "RECEIVE_SIGN_IN_ERRORS"

export function receiveSignUpErrors(errors) {
  return {
    type: RECEIVE_SIGN_UP_ERRORS,
    errors
  }
}

export function receiveSignInErrors(errors) {
  return {
    type: RECEIVE_SIGN_IN_ERRORS,
    errors
  }
}
