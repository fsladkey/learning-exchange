import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import actions from '../../actions/notification_actions'
import { closeDropdown } from '../../actions/dropdown_actions'

class NotificationList extends Component {
  markAsRead({ id, url }) {
    this.props.updateNotification({ id, seen: true }).then(() => {
      this.props.closeDropdown()
      this.props.router.push(url)
    })
  }

  render() {
    const { notifications } = this.props
    const notificationItems = notifications.map(notification => {
      let className = ''
      let badge = null
      if (!notification.seen) {
        className = 'new'
        //TODO: Consider using pseudo content
        badge = <span className="badge">New</span>
      }
      return (
        <li
          key={ notification.id }
          className={ className }
          onClick={ () => this.markAsRead(notification) }
          >
          <p>{ notification.notifiable_type }</p>
          { badge }
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

export default connect(
  null,
  {
    updateNotification: actions.updateNotifications,
    closeDropdown
   }
)(withRouter(NotificationList))
