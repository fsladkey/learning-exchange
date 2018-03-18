import React, { Component } from "react";
import { connect } from "react-redux";
import { membership } from "../../reducers/selectors"
import Toggle from "../shared/toggle"
import Actions from "../../actions/membership_actions"

class DigestToggle extends Component {

    onToggle = () => {
        this.props.updateMembership({
            ...this.props.membership,
            digest_active: !this.props.membership.digest_active
        })
    }

    render() {
        return (
            <Toggle
                active={this.props.membership.digest_active}
                activeStateText="Subscribed"
                inactiveStateText="Unsubscribed"
                activeToggleText="subscribe"
                inactiveToggleText="unsubscribe"
                onToggle={this.onToggle}
            />
        )
    }
}

function mapStateToProps(state, { groupId }) {
    return { membership: membership(state, groupId) }
}

export default connect(mapStateToProps, { updateMembership: Actions.updateMembership })(DigestToggle)