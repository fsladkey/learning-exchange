import React from 'react'
import { Link } from 'react-router'

export default function TagList({ tags }) {
  const tagItems = tags.map(tag =>
    <li key={ tag.id }>
      <Link to={ `/tags/${tag.name}` }>{ tag.name }</Link>
    </li>
  )

  return (
    <ul className="tag-list">
      { tagItems }
    </ul>
  )
}
