import React, { Component } from 'react'
import { Link } from 'react-router'

class TagForm extends Component {

  constructor(props) {
    super(props)
    this.state = { open: false, value: "" }
  }

  onChange = (e) => {
    this.setState({ value: e.currentTarget.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.onAdd()
  }

  onAdd = () => {
    this.props.onAdd(this.state.value)
    this.setState({ open: false, value: "" })
  }

  toggle = () => {
    this.setState({  open: !this.state.open, value: "" })
  }

  render() {
    return (
      <form className="tag-form" onSubmit={this.onSubmit}>
        {this.state.open ? null : <i className="fa fa-plus" onClick={this.toggle}/>}
        <input placeholder="" className={this.state.open? "open" : "closed"} value={this.state.value} onChange={this.onChange} />
        {
            this.state.open ? [
              <i className="fa fa-check" onClick={this.onAdd} />,
              <i className="fa fa-times" onClick={this.toggle} />
            ] : null
        }
      </form>
    )
  }
}

export default function TagList({ tags, editable, onAdd, onRemove }) {
  let tagItems = tags.map(tag =>
    <li key={ tag.id }>
      <Link to={ null && `/tags/${tag.name}` }>{ tag.name }</Link>
      {editable && <i className="fa fa-times" onClick={ () => onRemove(tag.name) } />}
    </li>
  )
  tagItems = editable && tagItems.length < 3 ? tagItems.concat(
    <li key={0}>
      <TagForm onAdd={onAdd} onRemove={onRemove} />
    </li>
  ) : tagItems

  return (
    <ul className="tag-list">
      { tagItems }
    </ul>
  )
}
