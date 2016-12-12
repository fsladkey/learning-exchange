import React from 'react'
import { connect } from 'react-redux'
// import { markAsRead } from '../../actions/notification_actions'

const markAsRead = () => {}

const NotificationList = ({ notifications, markAsRead }) => {
  markAsRead() {
    
  }

  render() {
    const ({ notifications }) = this.props
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
