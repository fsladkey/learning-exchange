export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"

export function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}
