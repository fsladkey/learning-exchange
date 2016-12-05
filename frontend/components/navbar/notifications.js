import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDropdown } from '../../actions/dropdown_actions'
import NotificationDropdown from './notifications_dropdown'

class Notifications extends Component {
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
    return (
      <button onClick={ this.toggleDropdown }>
        Notifications <span className="counter">{ notifications.length }</span>
        { this.dropDown() }
      </button>
    )
  }
}

function mapStateToProps({ dropdown }) {
  return { showDropdown: dropdown === 'notifications', notifications: [] }
}

export default connect(mapStateToProps, { setDropdown })(Notifications)
