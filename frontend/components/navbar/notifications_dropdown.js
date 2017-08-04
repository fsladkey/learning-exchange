import React from 'react'
import NotificationList from './notification_list'

const stopProp = e => e.stopPropagation()

const NotificationDropdown = ({ notifications }) => {
  const content = (notifications.length === 0) ?
    <p className="empty-notifications"><i className="fa fa-folder-open-o"/> No notifications to display</p> :
    <NotificationList notifications={ notifications }/>

  return (
    <section className="notification-dropdown arrow-box" onClick={ stopProp }>
      { content }
    </section>
  )
}

export default NotificationDropdown
