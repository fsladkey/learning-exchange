import React, { Component } from 'react'
import { connect } from 'react-redux'
import subscribe from '../../channels/subscribe'
import actions from '../../actions/chat_message_actions'
import { receiveResources } from '../../actions/generic_actions'
import { groupMessages } from '../../reducers/selectors'
import Chat from '../shared/chat'

class GroupChat extends Component {

  componentDidMount() {
    this.props.fetchMessages({
      chattable_id: this.props.params.id,
      chattable_type: "Group"
    })
  }

  receiveMessage = (message) => {
    message = JSON.parse(message)
    console.log(message);
    this.props.receiveResources({ [message.id]: message }, "chat_messages")
  }

  sendMessage = (message) => {
    return this.props.sendMessage({
      body: message.body,
      chattable_id: this.props.params.id,
      chattable_type: "Group"
    })
  }

  render() {
    return (
      <Chat
        channelName="GroupChannel"
        channelId={ this.props.params.id }
        receiveMessage={ this.receiveMessage }
        sendMessage={ this.sendMessage }
        messages={ this.props.messages }
        />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { messages: groupMessages(state, ownProps.params.id) }
}

export default connect(
  mapStateToProps,
  {
    fetchMessages: actions.fetchAllChatMessages,
    sendMessage: actions.createChatMessage,
    receiveResources
  }
)(GroupChat)
