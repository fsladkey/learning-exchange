import React, { Component } from "react";
import { connect } from "react-redux"
import EventActions from '../../actions/event_actions'
import { withRouter } from 'react-router'

export class CancelEventButton extends Component {

  handleClick = () => {
      this.props.destroyEvent(this.props.event.id).then(event =>
        this.props.router.push("/")
      )
  }

  render() {
    const { currentUser, event } = this.props;
    if (currentUser.id !== event.creator_id) return null
    return (
        <button className="lx-button" onClick={this.handleClick}>Cancel Event</button>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default withRouter(connect(mapStateToProps, { destroyEvent: EventActions.destroyEvent  })(CancelEventButton))