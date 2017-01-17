import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Notifications from './notifications'
import LogOutForm from './log_out_form'
import Counter from './counter'
import { numUnseenMessages } from '../../reducers/selectors'

function UserInfo({ currentUser, numUnseenMessages }) {
  return (
    <ul className="user-info flex-row">
      <li>
        <Link to="/profile">{ currentUser.firstname }</Link>
      </li>
      <li>
        <Notifications />
      </li>
      <li>
        <Link to="/messages">
          Direct Messages
          <Counter count={ numUnseenMessages } />
        </Link>
      </li>
      <li>
        <LogOutForm />
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  numUnseenMessages: numUnseenMessages(state)
 })

export default connect(mapStateToProps)(UserInfo)
