import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import actions from '../../actions/conversation_actions'

function MessageButton({ user, router, fetchConversation }) {
    const onClick = () => {
        fetchConversation(user.username).then(() => {
            router.push(`/messages/${user.username}`)
        })
    }
    return (
        <button className="direct-message-button" onClick={onClick}>Send Message</button>
    )
}

export default withRouter(connect(null, { fetchConversation:  actions.fetchOneConversation })(MessageButton))
