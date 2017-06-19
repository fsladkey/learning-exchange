// import $ from "jquery"

export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function noCaseSplit(string, splitVal) {
  splitVal = splitVal.toLowerCase()
  const result = []
  while (true) {
    const idx = string.toLowerCase().indexOf(splitVal)
    if (idx === -1) {
      result.push(string)
      break
    }
    result.push(string.slice(0, idx))
    result.push(string.slice(idx, idx + splitVal.length))
    string = string.slice(idx + splitVal.length)
  }
  return result
}

export const fadeIn = node => $(node).hide().fadeIn();

export const preventDefault = e => e.preventDefault()
export const stopProp = e => e.stopPropagation()