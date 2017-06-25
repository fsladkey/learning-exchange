import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import { attendanceByEventId } from '../../reducers/selectors'
import AttendanceActions from '../../actions/attendance_actions'

export class RSVP extends Component {

  handleClick = () => {
    this.props.isAttending ?
      this.props.destroyAttendance(this.props.attendanceId) :
      this.props.createAttendance({ event_id: this.props.eventId })
  }

  headerText() {
    return this.props.isAttending ?
      "You are attending this event." :
      "You are not attending this event."
  }

  submitText() {
    return this.props.isAttending ? "Cancel" : "Attend"
  }

  className() {
    return this.props.isAttending ? "cancel-button" : "attend-button"
  }

  render() {
    return (
      <section className="rsvp">
        <p>{this.headerText()}</p>
        <button className="lx-button" onClick={this.handleClick}>{this.submitText()}</button>
      </section>
    )
  }
}

function mapStateToProps(state, { eventId }) {
  const attendance = attendanceByEventId(state, eventId);
  const attendanceId = attendance && attendance.id
  return {
    attendanceId: attendanceId,
    isAttending: !!attendanceId
  }
}

const { createAttendance, destroyAttendance } = AttendanceActions
export default connect(mapStateToProps, { createAttendance, destroyAttendance  })(RSVP)