import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageList from './message_list'
import MessageForm from './message_form'
import subscribe from '../../channels/subscribe'
import actions from '../../actions/chat_message_actions'
import { receiveResources } from '../../actions/generic_actions'

class Chat extends Component {

  componentDidMount() {
    this.props.fetchMessages({
      chattable_id: this.props.resourceId,
      chattable_type: this.props.resourceType
    })

    this.subscribe()
  }

  receiveMessage = (message) => {
    message = JSON.parse(message)
    this.props.receiveResources({ [message.id]: message }, "chat_messages")
  }

  sendMessage = (message) => {
    return this.props.sendMessage({
      body: message.body,
      chattable_id: this.props.resourceId,
      chattable_type: this.props.resourceType
    })
  }


  subscribe() {
    const { resourceId, resourceType, subscribe } = this.props
    this.channel = subscribe({
      id: resourceId,
      channel: `${resourceType}Messages`,
      received: this.receiveMessage
    })
  }

  render() {
    const { currentUser } = this.props
    return (
      <section>
        <MessageList
          currentUser={ currentUser }
          messages={ this.props.messages }
          />
        <MessageForm sendMessage={ this.sendMessage }/>
      </section>
    )
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser, subscribe }
}

export default connect(
  mapStateToProps,
  {
    fetchMessages: actions.fetchAllChatMessages,
    sendMessage: actions.createChatMessage,
    receiveResources
  }
)(Chat)
