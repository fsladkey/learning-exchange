export function fetch(url, data = {}) {
  return $.ajax({ url, method: "GET", data })
}

export function post(url, data) {
  return $.ajax({ url, data, method: "POST" })
}

export function patch(url, data) {
  return $.ajax({ url, data, method: "PATCH" })
}

export function destroy(url) {
  return $.ajax({ url, method: "DELETE" })
}

export function search(data) {
  return fetch('api/search', data)
}
