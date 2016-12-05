export function fetch(url) {
  return $.ajax({ url, method: "GET" })
}

export function post(url) {
  return $.ajax({ url, data, method: "POST" })
}

export function patch(url, data) {
  return $.ajax({ url, data, method: "PATCH" })
}
