import { createResourceActions } from './generic_actions'

const userActions = createResourceActions('user')

export default userActions

export const createUserFromStore = () => (dispatch, getState) => {
    return dispatch(userActions.createUser(getState().userForm.toJS()))
}

export const updateUserFromStore = () => (dispatch, getState) => {
    return dispatch(userActions.updateUser(getState().userForm.toJS()));
}