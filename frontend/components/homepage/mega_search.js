import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMapFocus } from '../../actions/map_focus_actions'

class MegaSearch extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { query: "" }
  }

  handleChange(e) {
    this.setState({ query: e.currentTarget.value })
  }

  render() {
    const { setMapFocus } = this.props
    const { query } = this.state
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

export default connect(null, { setMapFocus })(MegaSearch)
