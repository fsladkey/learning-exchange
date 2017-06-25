import { fetch } from "../utils/api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"

export function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

export function fetchCurrentUser() {
  return dispatch => {
    return fetch("/api/session").then(currentUser =>
      dispatch(receiveCurrentUser(currentUser))
    )
  }
}