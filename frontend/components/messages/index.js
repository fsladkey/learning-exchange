import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router'
import actions from '../../actions/conversation_actions'
import { conversations } from '../../reducers/selectors'

function ConversationItem({ messages }) {
  return <li>{ JSON.stringify(messages) }</li>
}

function ConversationPreview({ convo, user, params: { username } }) {
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
    return this.props.conversations.values().next().value
  }

  componentDidMount() {
    this.props.fetchConversations().then(action => {
      const firstUser = this.firstConvo()
      firstUser && this.props.router.push(`/messages/${firstUser.other_user.username}`)
    })
  }

  render() {
    const { currentUser, conversations, children, params } = this.props
    const firstConvo = this.firstConvo()
    const body = firstConvo ? children : null
    const convoItems = conversations.valueSeq().map((convo) => {
      return (
        <ConversationPreview
          key={ convo.id }
          params={ params }
          user={ convo.other_user }
          convo={ convo }
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
const mapStateToProps = (state) => {
  return { currentUser: state.currentUser, conversations: conversations(state) }
}
export default connect(
  mapStateToProps,
  { fetchConversations: actions.fetchAllConversations }
)(withRouter(Messages))
