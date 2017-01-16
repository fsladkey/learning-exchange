import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { noCaseSplit } from '../../utils/misc'

function hl(text, frag) {
  return noCaseSplit(text, frag).map((text, idx) => {
    const className = idx % 2 == 0 ? "" : "highlight"
    return <span key={ idx } className={ className }>{ text }</span>
  })
}

const searchResultItems = {
  Users({ item, url, query }) {
    return (
      <div className="result-info">
        <hgroup className="flex-row user-item">
          <h4>{ hl(item.get('fullname'), query) }</h4>
          <p>- { hl(item.get('username'), query) }</p>
        </hgroup>
        <p>{ hl(item.get('email'), query) }</p>
      </div>
    )
  },

  Events({ item, query }) {
    return (
      <div className="result-info">
        <h4>{ hl(item.get('name'), query) }</h4>
        <p>{ hl(item.get('description'), query) }</p>
      </div>
    )
  },

  Groups({ item, url, query }) {
    return (
      <div className="result-info">
        <h4>{ hl(item.get('name'), query) }</h4>
        <p>{ hl(item.get('description'), query) }</p>
      </div>
    )
  }
}

function SearchResults({ searchResults, query }) {
  return (
    <ul className="result-pane">
      <CategoryList
        results={ searchResults.get('groups') }
        query={ query }
        type="Groups"/>
      <CategoryList
        results={ searchResults.get('events') }
        query={ query }
        type="Events"/>
      <CategoryList
        results={ searchResults.get('users') }
        query={ query }
        type="Users"/>
    </ul>
  )
}

function CategoryList({ type, results, query  }) {
  return (
    <li className='search-result-group'>
      <h3>{ type }</h3>
      <CategoryResults results={ results } type={ type } query={ query }/>
    </li>
  )
}

function CategoryResults({ type, results, query }) {
  if (results.size === 0) {
    return <p>{ `No ${type.toLowerCase()} found` }</p>
  }
  return (
    <ul>
      {
        results.map(result =>
          <SearchResultItem
            key={ result.get('id') }
            item={ result }
            type={ type }
            query={ query}/>
        )
      }
    </ul>
  )
}

function SearchResultItem({ item, type, query }) {
  const url = `/${type.toLowerCase()}/${item.get('id')}`
  const ResultContent = searchResultItems[type]
  let tagItems
  if (item.get('tag_names')) {
    tagItems = item.get('tag_names').split(', ').map(tag => {
      return <li key={ tag }>{ hl(tag, query) }</li>
    })
  }
  
  return (
    <li key={ item.get('id') } className="search-result-item">
    <Link to={ url }>
      <ResultContent item={ item } query={ query }/>
      <h5>Interests</h5>
      <ul className="tag-names flex-row">
        { tagItems }
      </ul>
    </Link>
    </li>
  )
}

const mapStateToProps = ({ searchResults, query }) => {
  return { searchResults, query }
}

export default connect(mapStateToProps)(SearchResults)
