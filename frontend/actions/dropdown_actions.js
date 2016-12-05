export const SET_DROPDOWN = "SET_DROPDOWN"

export const setDropdown = (dropdown) => ({
  type: SET_DROPDOWN,
  dropdown
})

export const closeDropdown = () => ({
  type: SET_DROPDOWN,
  dropdown: null
})
