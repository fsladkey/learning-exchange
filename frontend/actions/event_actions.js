import { createResourceActions } from './generic_actions'

const eventActions = createResourceActions('event');

export default eventActions

export const createEventFromStore = () => (dispatch, getState) => {
  return dispatch(eventActions.createEvent(getState().eventForm.toJS()))
}
