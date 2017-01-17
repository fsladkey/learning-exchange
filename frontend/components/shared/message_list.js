import React, { Component } from 'react'

function Message({ message, currentUser }) {
  const className = message.sender_id === currentUser.id ?
    "current-user message" :
    "other-user message"
  return (
    <li className={ className }>
      { message.body }
    </li>
  )
}

export default class MessageList extends Component {

  scrollToBottom() {
    this.node.scrollTop = this.node.scrollHeight;
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentWillReceiveProps() {
    setTimeout(() => this.scrollToBottom(), 10)
  }

  render() {
    const { messages, currentUser } = this.props
    return (
      <ul ref={ node => this.node = node } className="message-list">
      {
        messages.map(message =>
          <Message key={ message.id } message={ message } currentUser={ currentUser }/>
        )
      }
      </ul>
    )
  }
}
