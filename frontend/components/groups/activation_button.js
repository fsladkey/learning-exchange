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
    if (!this.props.currentUser.admin) return null
    return (
      <button onClick={this.onClick} className={`activation-button ${this.props.active ? "active" : "inactive"}`}>
        { this.props.active ? "Deactivate" : "Activate" }
      </button>
    )
  }
}

function mapStateToProps({ memberships, currentUser }, { member, groupId }) {
  return {
    currentUser: currentUser,
    membership: memberships.valueSeq().find(membership => 
      membership.member_id === member.id && membership.groupId === groupId
    )
  }
}

export default connect(mapStateToProps, { updateMembership: Actions.updateMembership })(ActivationButton)
