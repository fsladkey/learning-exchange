import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
// import { markAsRead } from '../../actions/notification_actions'

const markAsRead = () => {}

class NotificationList extends Component {
  markAsRead() {
    return null
  }

  render() {
    const { notifications } = this.props
    const notificationItems = notifications.map(notification => {
      return (
        <li key={ notification.id } onClick={ this.markAsRead }>
          { notification.notifiable_type }
        </li>
      )
    })

    return (
      <ul>
        { notificationItems }
      </ul>
    )
  }
}

export default connect(null, { markAsRead })(withRouter(NotificationList))
