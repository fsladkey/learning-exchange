export const SET_FORM_FIELD = "SET_FORM_FIELD"

export function setFormField(form, field, value) {
  return {
    type: SET_FORM_FIELD,
    form,
    field,
    value
  }
}
