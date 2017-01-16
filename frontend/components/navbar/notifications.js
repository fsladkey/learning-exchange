import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDropdown } from '../../actions/dropdown_actions'
import NotificationDropdown from './notifications_dropdown'
import Counter from './counter'

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
        Notifications
        { this.dropDown() }
      </button>
    )
  }
}

function mapStateToProps({ dropdown, currentUser: { notifications } }) {
  return { showDropdown: dropdown === 'notifications', notifications }
}

export default connect(mapStateToProps, { setDropdown })(Notifications)
