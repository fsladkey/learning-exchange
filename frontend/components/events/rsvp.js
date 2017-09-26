import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import { attendanceByEventId } from '../../reducers/selectors'
import AttendanceActions from '../../actions/attendance_actions'
import Icon from '../shared/icon'

export class RSVP extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  handleClick = () => {
    this.setState(({ open }) => ({ open: false }));
    this.props.isAttending ?
      this.props.destroyAttendance(this.props.attendanceId) :
      this.props.createAttendance({ event_id: this.props.eventId })
  }

  submitText() {
    return this.props.isAttending ? "not going" : "going"
  }

  statusText() { // move into functional component
    return this.props.isAttending ?
      <span><Icon type="caret-down" /> Going</span> :
      <span><Icon type="caret-down" /> Not Going</span>
  }

  toggleMenu = () => {
    this.setState(({ open }) => ({ open: !open }));
  }

  className() {
    return [
      this.props.isAttending ? "going" : "not-going",
      this.state.open ? "open" : ""
    ].filter(n => n).join(" ")

  }

  render() {
    return (
      <section className="rsvp">
        <button className={ `lx-button rsvp-status ${this.className()}` } onClick={this.toggleMenu}>
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