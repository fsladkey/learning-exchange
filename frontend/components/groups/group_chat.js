import { connect } from 'react-redux'
import React, { Component } from 'react'
import { groupMessages } from '../../reducers/selectors'
import Chat from '../shared/chat'

class GroupChat extends Component {

  render() {
    return (
      <Chat
        resourceType="Group"
        resourceId={ this.props.params.id }
        messages={ this.props.messages }
        fetchMessges={ this.props.fetchMessages }
        sendMessge={ this.props.sendMessage }
        allowSending={this.props.group.chat_enabled}
        />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { messages: groupMessages(state, ownProps.params.id), group: state.groups.get(ownProps.params.id) }
}

export default connect(mapStateToProps)(GroupChat)
