import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router'
import actions from '../../actions/conversation_actions'
import { conversations } from '../../reducers/selectors'
import { fadeIn } from '../../utils/misc'

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

  firstConvoUser() {
    return this.props.conversations.values().next().value
  }

  componentDidMount() {
    this.props.fetchConversations().then(action => this.redirectToFirstConv())
  }

  componentWillReceiveProps() {
    this.redirectToFirstConv()
  }

  redirectToFirstConv = () => {
    if (!this.props.params.username) {
      const firstUser = this.firstConvoUser()
      firstUser && this.props.router.push(`/messages/${firstUser.other_user.username}`)
    }
  }

  render() {
    const { currentUser, conversations, children, params } = this.props
    const firstConvoUser = this.firstConvoUser()
    const body = firstConvoUser ? children : null
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
      <section className="messages" ref={ fadeIn }>
      <h1>Conversations</h1>
      <div className="convo-container">
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
export default withRouter(connect(
  mapStateToProps,
  { fetchConversations: actions.fetchAllConversations }
)(Messages))
