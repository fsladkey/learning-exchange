import React from 'react'

const stopProp = e => e.stopPropagation()

const NotificationList = ({ notifications }) => {
  const notificationItems = notifications.map(notification => {
    return <Notification notification={ notification }/>
  })

  return (
    <ul>
      { notificationItems }
    </ul>
  )
}

const NotificationDropdown = ({ notifications }) => {
  let content
  if (notifications.length === 0) {
    content = <p>No notifications to display</p>
  } else {
    content = <NotiicationList notifications={ notifications }/>
  }

  return (
    <section className="notification-dropdown arrow-box" onClick={ stopProp }>
      { content }
    </section>
  )
}

export default NotificationDropdown
