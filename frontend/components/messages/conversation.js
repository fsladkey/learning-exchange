import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentConversation } from '../../reducers/selectors'
import MessageForm from './message_form'
import MessageList from '../shared/message_list'

function Conversation({ currentUser, conversation }) {
  return (
    <section className="converation-detail">
      <h3>{ conversation.other_user.fullname }</h3>
      <MessageList messages={ conversation.messages } currentUser={ currentUser }/>
      <MessageForm receiver_id={ conversation.other_user.id } conversation_id={ conversation.id }/>
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
