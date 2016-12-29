import React from 'react'

export default function PageMissing({ location: { path } }) {
  return (
    <section>
      <h1>404 the path { path } did not match any routes</h1>
      <p>
        Maybe you misspelled something?
      </p>
    </section>
  )
}
