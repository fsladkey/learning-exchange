import React, { Component } from 'react'
import { connect } from 'react-redux'
import { eventMessages } from '../../reducers/selectors'
import Chat from '../shared/chat'

class EventChat extends Component {

  render() {
    // TODO: Protect on back end?
    if (!isEventCreator) return null
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

function mapStateToProps(state, { params: { id } }) {
  const group = state.events.get(id)
  debugger
  return { 
    group,
    messages: eventMessages(state, id),
    isEventCreator: group.creator_id == state.currentUser.id
  }
}

export default connect(mapStateToProps)(EventChat)
