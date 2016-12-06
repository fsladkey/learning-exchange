import React from 'react'
import { connect } from 'react-redux'

function Messages({ currentUser }) {
  return (
    <section>
      <h1>Messages</h1>
      <ul>
        {
          currentUser.received_messages.map(message => {
            return <li key={ message.id }>{ message.body }</li>
          })
        }
      </ul>
    </section>
  )
}
const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps)(Messages)
