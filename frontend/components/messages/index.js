import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router'
import actions from '../../actions/direct_message_actions'
import { conversations } from '../../reducers/selectors'

function ConversationItem({ messages }) {
  return <li>{ JSON.stringify(messages) }</li>
}

function ConversationPreview({ messages, user, params: { username } }) {
  const className = user.username === username ? "active" : ""
  return (
    <li>
      <Link to={ `/messages/${user.username}` } className={ className }>
        <h3>{ user.fullname }</h3>
      </Link>
    </li>
  )
}

class Messages extends Component {

  firstConvo() {
    return JSON.parse(this.props.conversations.keys().next().value)
  }

  componentDidMount() {
    this.props.fetchMessages().then(action => {
      const firstUser = this.firstConvo().username
      this.props.router.push(`/messages/${firstUser}`)
    })
  }

  render() {
    const { currentUser, conversations, children, params } = this.props
    const firstConvo = this.props.conversations.keys().next().value
    const body = firstConvo ? children : null
    const convoItems = conversations.keySeq().map((user) => {
      return (
        <ConversationPreview
          key={ user }
          messages={ conversations.get(user) }
          params={ params }
          user={ JSON.parse(user) }
          />
      )
    })
    return (
      <section className="messages">
      <h1>Conversations</h1>
      <div>
        <nav>
          <ul className="conversation-list">
            { convoItems }
          </ul>
        </nav>
        { body }
      </div>
      </section>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    currentUser: state.currentUser,
    conversations: conversations(state)
  }
}
export default connect(
  mapStateToProps,
  { fetchMessages: actions.fetchAllDirect_messages }
)(withRouter(Messages))
