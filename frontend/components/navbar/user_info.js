import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Notifications from './notifications'
import LogOutForm from './log_out_form'
import Counter from './counter'

function UserInfo({ currentUser, directMessages }) {
  console.log(arguments[0]);
  return (
    <ul className="user-info flex-row">
      <li>
        <Link to="/profile">{ currentUser.firstname }</Link>
      </li>
      <li>
        <Notifications />
        <Counter count={ currentUser.new_notifications } />
      </li>
      <li>
        <Link to="/messages">
          Direct Messages
          <Counter count={ currentUser.received_messages.length } />
        </Link>
      </li>
      <li>
        <LogOutForm />
      </li>
    </ul>
  )
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(UserInfo)
