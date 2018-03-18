import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import { attendanceByEventId } from '../../reducers/selectors'
import Toggle from "../shared/toggle"
import AttendanceActions from '../../actions/attendance_actions'
import Icon from '../shared/icon'

export class RSVP extends Component {

  onToggle = () => {
    this.props.isAttending ?
      this.props.destroyAttendance(this.props.attendanceId) :
      this.props.createAttendance({ event_id: this.props.eventId })
  }

  render() {
    return (
      <Toggle
        active={this.props.isAttending}
        activeStateText="Going"
        inactiveStateText="Not Going"
        activeToggleText="going"
        inactiveToggleText="not going"
        onToggle={this.onToggle}
      />
    )
  }
}

function mapStateToProps({ currentUser, attendances }, { eventId }) {
  const attendance = attendances.find(attendance =>
    attendance.event_id === eventId && attendance.user_id === currentUser.id
  )
  const attendanceId = attendance && attendance.id
  return {
    attendanceId: attendanceId,
    isAttending: !!attendanceId
  }
}

const { createAttendance, destroyAttendance } = AttendanceActions
export default connect(mapStateToProps, { createAttendance, destroyAttendance  })(RSVP)