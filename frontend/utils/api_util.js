const defaults = { dataType: "json", contentType: "application/json" };

export function fetch(url, data = {}) {
  return $.ajax({ url, method: "GET", data, ...defaults })
}

export function post(url, data) {
  return $.ajax({ url, data, method: "POST", ...defaults })
}

export function patch(url, data) {
  return $.ajax({ url, data: JSON.stringify(data), method: "PATCH", ...defaults })
}

export function destroy(url) {
  return $.ajax({ url, method: "DELETE", ...defaults })
}

export function search(data) {
  return fetch('api/search', data)
}
