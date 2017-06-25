import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/chat_message_actions'

export default class MessageForm extends Component {

  constructor(props) {
    super(props)
    this.state = { body: "" }
  }

  clearForm = () => {
    this.setState({ body: "" })
  }

  handleChange = (e) => {
    this.setState({ body: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state).then(this.clearForm)
  }

  render() {
    const { messages, currentUser, allowSending } = this.props
    if (!allowSending) return null
    return (
      <form onSubmit={ this.handleSubmit } className="message-form">
        <input
          onChange={ this.handleChange }
          placeholder="Write a message"
          value={ this.state.body }
          />
        <button className="lx-button">Send</button>
      </form>
    )
  }
}
