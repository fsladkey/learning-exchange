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

  submitText() {
    return this.props.isAttending ?
      "cancel" :
      "attend"
  }

  statusText() {
    return this.props.isAttending ?
      <span>Going <i className="fa fa-check"/></span> :
      <span>Not Going <i className="fa fa-times"/></span>
  }

  className() {
    return this.props.isAttending ? "going" : "not-going"
  }

  render() {
    return (
      <section className="rsvp">
        <button className={ `lx-button rsvp-status ${this.className()}` }>
          { this.statusText() }
        </button>
        <button className={`rsvp-submit ${this.className()}`} onClick={this.handleClick}>
          {this.submitText()}
        </button>
      </section>
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