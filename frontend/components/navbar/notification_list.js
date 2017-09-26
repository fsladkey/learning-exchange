import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import actions from '../../actions/notification_actions'
import { closeDropdown } from '../../actions/dropdown_actions'
import Icon from '../shared/icon'

class NotificationList extends Component {
  markAsRead = ({ id, url }) => () => {
    this.props.updateNotification({ id, seen: true }).then(() => {
      this.props.closeDropdown()
      this.props.router.push(url)
    })
  }
  
  destroyNotification = (id) => (e) => {
    e.stopPropagation()
    this.props.destroyNotification(id)
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
          onClick={ this.markAsRead(notification) }
          >
          <div>
            <h5>{notification.notification_header }</h5>
            <p>{notification.notification_message }</p>
          </div>
          <div className="left-content">
            { badge }
            <span className="delete-notification-button" onClick={this.destroyNotification(notification.id)}>
              <Icon type="times" />
            </span>
          </div>
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
    destroyNotification: actions.destroyNotification,
    closeDropdown
   }
)(withRouter(NotificationList))
