import React, { Component } from 'react'
import { connect } from 'react-redux'
import { eventMessages } from '../../reducers/selectors'
import Chat from '../shared/chat'

class EventChat extends Component {

  render() {
    // TODO: Protect on back end?
    return (
      <Chat
        resourceId={ this.props.params.id }
        resourceType={ "Event" }
        messages={ this.props.messages }
        allowSending={this.props.isEventCreator}
        />
    )
  }
}

function mapStateToProps(state, { params: { id } }) {
  const group = state.events.get(id)
  return { 
    group,
    messages: eventMessages(state, id),
    isEventCreator: group.creator_id == state.currentUser.id
  }
}

export default connect(mapStateToProps)(EventChat)
