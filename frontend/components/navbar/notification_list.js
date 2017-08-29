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
      let classNames = ["notification"]
      let badge = null
      if (!notification.seen) {
        classNames.push("new")
        //TODO: Consider using pseudo content
        badge = <span className="badge">New</span>
      }
      return (
        <li
          key={ notification.id }
          className={ classNames.join(" ") }
          onClick={ () => this.markAsRead(notification) }
          >
          <div>
            <h5>{notification.notification_header }</h5>
            <p>{notification.notification_message }</p>
          </div>
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
    updateNotification: actions.updateNotification,
    closeDropdown
   }
)(withRouter(NotificationList))
