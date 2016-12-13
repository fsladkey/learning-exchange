import { createSelector } from 'reselect'

export const allResults = ({ searchResults }) => {
  let all = []
  for (let type in searchResults) {
    all = all.concat(searchResults[type])
  }
  return all
}
