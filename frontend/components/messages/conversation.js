import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentConversation } from '../../reducers/selectors'
import MessageForm from './message_form'

function Message({ message, currentUser }) {
  const className = message.sender_id == currentUser.id ?
    "current-user message" :
    "other-user message"
  return (
    <li className={ className }>
      { message.body }
    </li>
  )
}

function MessageList({ messages, currentUser }) {
  return (
    <ul>
      {
        messages.map(message =>
          <Message key={ message.id } message={ message } currentUser={ currentUser }/>
        )
      }
    </ul>
  )
}

function Conversation({ currentUser, conversation }) {
  return (
    <section className="converation-detail">
      <h3>{ conversation.other_user.fullname }</h3>
      <MessageList messages={ conversation.messages } currentUser={ currentUser }/>
      <MessageForm receiver_id={ conversation.other_user.id }/>
    </section>
  )
}

const mapStateToProps = (state, { params: { username } }) => {
  return {
    currentUser: state.currentUser,
    conversation: currentConversation(state, username)
  }
}

export default connect(mapStateToProps)(Conversation)
