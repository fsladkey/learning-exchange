import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Notifications from './notifications'
import LogOutForm from './log_out_form'

function UserInfo({ currentUser }) {
  return (
    <ul className="user-info flex-row">
      <li>
        <Link to="/profile">{ currentUser.firstname }</Link>
      </li>
      <li>
        <Notifications />
      </li>
      <li>
        <Link to="/messages">Direct Messages</Link>
      </li>
      <li>
        <LogOutForm />
      </li>
    </ul>
  )
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps)(UserInfo)
