import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentConversation } from '../../reducers/selectors'
import MessageForm from './message_form'
import MessageList from '../shared/message_list'

function Conversation({ currentUser, conversation, direct_messages }) {
  const messages = conversation.messages.map(id => direct_messages.get(id + ''))

  return (
    <section className="converation-detail">
      <h3>{ conversation.other_user.fullname }</h3>
      <MessageList messages={ messages } currentUser={ currentUser }/>
      <MessageForm receiver_id={ conversation.other_user.id } conversation_id={ conversation.id }/>
    </section>
  )
}

const mapStateToProps = (state, { params: { username } }) => {
  return {
    currentUser: state.currentUser,
    conversation: currentConversation(state, username),
    direct_messages: state.direct_messages
  }
}

export default connect(mapStateToProps)(Conversation)
