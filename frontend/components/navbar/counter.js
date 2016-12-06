import React from 'react'

export default function({ count }) {
  return count === 0 ? null : <span className="counter">{ count }</span>
}
