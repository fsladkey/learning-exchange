import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageList from './message_list'
import MessageForm from './message_form'
import subscribe from '../../channels/subscribe'

class Chat extends Component {
  componentDidMount() {
    this.channel = this.props.subscribe(
      this.props.channelId,
      this.props.channelName,
      this.props.receiveMessage
    )
  }

  render() {
    const { currentUser } = this.props
    return (
      <section>
        <MessageList
          currentUser={ currentUser }
          messages={ this.props.messages }
          />
        <MessageForm sendMessage={ this.props.sendMessage }/>
      </section>
    )
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser, subscribe }
}

export default connect(mapStateToProps)(Chat)
