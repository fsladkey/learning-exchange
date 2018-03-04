import { createResourceActions } from './generic_actions'

const userActions = createResourceActions('user')

export default userActions

export const createUserFromStore = (additionalFormData = {}) => (dispatch, getState) => {
    return dispatch(userActions.createUser({ ...getState().userForm.toJS(), ...additionalFormData }))
}

export const updateUserFromStore = (additionalFormData = {}) => (dispatch, getState) => {
    return dispatch(userActions.updateUser({ ...getState().userForm.toJS(), ...additionalFormData }))
}