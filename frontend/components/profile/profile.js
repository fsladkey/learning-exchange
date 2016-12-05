import React from 'react'

export default function UserProfile({ user }) {
  return (
    <section>
      <h1>{ user.fullname}</h1>
    </section>
  )
}
