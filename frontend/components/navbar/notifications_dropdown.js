import React from 'react'
import NotificationList from './notification_list'

const stopProp = e => e.stopPropagation()

const NotificationDropdown = ({ notifications }) => {
  let content
  if (notifications.length === 0) {
    content = <p>No notifications to display</p>
  } else {
    content = <NotificationList notifications={ notifications }/>
  }

  return (
    <section className="notification-dropdown arrow-box" onClick={ stopProp }>
      { content }
    </section>
  )
}

export default NotificationDropdown
