import React, { Component } from 'react'
import Actions from '../../actions/comment_actions'
import { connect } from 'react-redux'

class CommentForm extends Component {

  constructor(props) {
    super(props)
    this.state = { body: "", posting: false }
  }

  clearForm = (e) => {
    this.setState({ body: "", posting: false })
  }

  handleChange = (e) => {
    this.setState({ body: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ posting: true })
    this.props.createComment({
      commentable_type: "User",
      commentable_id: this.props.user.id,
      body: this.state.body
    }).then(this.clearForm, this.clearForm)
  }

  render() {
    const { user, editable } = this.props
    const placeholder = editable ?
      'Leave a comment on your profile' :
      `Leave a comment for ${user.firstname}`
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit }>
        <textarea
          placeholder={ placeholder }
          onChange={ this.handleChange }
          value={ this.state.body }
          ></textarea>
        <button disabled={ this.state.posting }>Post</button>
      </form>
    )
  }
}

export default connect(null, { createComment: Actions.createComment })(CommentForm)
