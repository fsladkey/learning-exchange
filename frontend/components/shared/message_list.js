import React, { Component } from 'react'
import moment from 'moment'
import UserPhoto from '../shared/user_photo'

const MOMENT_FORMAT = "dddd, MMMM Do YYYY, h:mm:ss a"


function Message({ message, currentUser }) {
  const isCurrentUserMessage = message.sender_id === currentUser.id;
  return (
    <li className={`message-item ${isCurrentUserMessage ? "left" : "right"}`}>
      <div className="message-row">
        <UserPhoto user={ message.sender } className="thumb" />
        <p className="message">
          { message.body }
        </p>
      </div>
      <p className="message-timestamp">{moment(message.created_at).format(MOMENT_FORMAT) }</p>
    </li>
  )
}

export default class MessageList extends Component {

  scrollToBottom = (smooth = true) => {
    const node = $(".message-list")
    const scrollHeight = node[0].scrollHeight
    smooth ?
      node.animate({ scrollTop: scrollHeight }) :
      node.scrollTop(scrollHeight);
  }

  componentDidMount() {
    this.scrollToBottom(false)
  }

  componentWillReceiveProps() {
    setTimeout(() => this.scrollToBottom(true), 10)
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
