import React, { Component } from "react"
import { connect } from "react-redux"
import Actions from "../../actions/membership_actions"

class ActivationButton extends Component {
  onClick = () => {
    this.props.updateMembership({
      id: this.props.membership.id,
      active: !this.props.membership.active
    })
  }

  render() {
    return (
      <button onClick={this.onClick}>
        { this.props.active ? "Deactivate" : "Activate" }
      </button>
    )
  }
}

function mapStateToProps({ memberships }, { member, groupId }) {
  return {
    membership: memberships.valueSeq().find(membership => 
      membership.member_id === member.id && membership.groupId === groupId
    )
  }
}

export default connect(mapStateToProps, { updateMembership: Actions.updateMembership })(ActivationButton)