import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDropdown } from '../../actions/dropdown_actions'
import NotificationDropdown from './notifications_dropdown'
import Counter from './counter'

class Notifications extends Component {
  // TODO: Normalize notifications in redux state
  constructor(props) {
    super(props)
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  dropDown() {
    if (this.props.showDropdown) {
      return <NotificationDropdown notifications={ this.props.notifications }/>
    }
  }

  toggleDropdown(e) {
    e.stopPropagation()
    this.props.showDropdown ?
      this.props.setDropdown(null) :
      this.props.setDropdown('notifications')
  }

  render() {
    const { notifications } = this.props
    const numNew = notifications.reduce((sum, n) => sum + (n.seen ? 0 : 1), 0)
    return (
      <button onClick={ this.toggleDropdown }>
        Notifications
        <Counter count={ numNew } />
        { this.dropDown() }
      </button>
    )
  }
}

function mapStateToProps({ dropdown, currentUser: { notifications } }) {
  return { showDropdown: dropdown === 'notifications', notifications }
}

export default connect(mapStateToProps, { setDropdown })(Notifications)
