import React from 'react'

function handleSubmit(e, props) {
  e.preventDefault
}

export default function SearchBar(props) {
  return (
    <form onSubmit={ (e) => handleSubmit(e, props) }>
    </form>
  )
}
