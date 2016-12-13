import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

function CategoryList({ type, results}) {
  const resultItems = results.map(result => {
    const url = `/${type.toLowerCase()}/${result.id}`
    return (
      <li key={ result.id }>
        <Link to={ url }>{ result.title }</Link>
      </li>
    )
  })

  return (
    <article>
      <h3>{ type }</h3>
      <ul>
        { resultItems }
      </ul>
    </article>
  )
}

function SearchResults({ searchResults }) {
  return (
    <article>
      <CategoryList results={ searchResults.groups } type="Groups"/>
      <CategoryList results={ searchResults.events } type="Events"/>
      <CategoryList results={ searchResults.users } type="Users"/>
    </article>
  )
}

const mapStateToProps = ({ searchResults }) => {
  return { searchResults }
}

export default connect(mapStateToProps)(SearchResults)
