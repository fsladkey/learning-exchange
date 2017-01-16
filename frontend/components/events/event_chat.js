import React, { Component } from 'react'
import { connect } from 'react-redux'
import { eventMessages } from '../../reducers/selectors'
import Chat from '../shared/chat'

class EventChat extends Component {

  render() {
    return (
      <Chat
        resourceType="Event"
        resourceId={ this.props.params.id }
        messages={ this.props.messages }
        fetchMessges={ this.props.fetchMessages }
        sendMessge={ this.props.sendMessage }
        />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { messages: eventMessages(state, ownProps.params.id) }
}

export default connect(mapStateToProps)(EventChat)
