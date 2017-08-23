import React, { Component } from 'react'
import UserPhoto from '../shared/user_photo'

function Message({ message, currentUser }) {
  if (message.sender_id === currentUser.id) {
    return (
      <li className="message-item">
        <UserPhoto user={ currentUser } className="thumb" />
        <p className="current-user message">{ message.body }</p>
      </li>
    )
  }
  return (
    <li className="message-item">
      <p className="other-user message">{ message.body }</p>
      <UserPhoto user={ message.sender } className="thumb" />
    </li>
  )
}

export default class MessageList extends Component {

  scrollToBottom = (speed, prev) => {
    // if (this.node.scrollTop === prev) return;
    if (this.node.scrollTop < this.node.scrollHeight) {
      this.node.scrollTop++
      setTimeout(() => {}
        // this.scrollToBottom(speed, this.node.scrollTop), speed
      )
    }
  }

  componentDidMount() {
    this.scrollToBottom(1)
  }

  componentWillReceiveProps() {
    setTimeout(() => this.scrollToBottom(1), 10)
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
