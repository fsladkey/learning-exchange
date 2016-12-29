export const SET_FORM_FIELD = "SET_FORM_FIELD"

export function setFormField(field, value) {
  return {
    type: SET_FORM_FIELD,
    field,
    value
  }
}
