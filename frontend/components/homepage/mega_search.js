import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMapFocus } from '../../actions/map_focus_actions'
import { setQuery } from '../../actions/search_actions'

class MegaSearch extends Component {
  handleChange = (e) => {
    this.props.setQuery(e.currentTarget.value)
  }

  render() {
    const { setMapFocus, query } = this.props
    return (
      <form className="megasearch">
        <input
          id="search-input"
          type="text"
          onChange={ this.handleChange }
          onFocus={ () => setMapFocus(true) }
          onBlur={ () => query || setMapFocus(false) }
          placeholder="Search for something you're interested in"
          value={ query }
          />
      </form>
    );
  }
}

export default connect(
  ({ query }) => ({ query }),
  { setMapFocus, setQuery }
)(MegaSearch)
