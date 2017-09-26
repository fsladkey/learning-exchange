import React from 'react'

export default function Icon({ type, className }) {
  className = `fa fa-${type} aria-hidden="true"` + (className ? ` ${className}` : "")
  return <i className={className} />
}